import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index.js'
import appwriteService from '../../appwrite/config.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'




function Postform({ post }) {

    // const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    //     defaultValues: {
    //         title: post?.title || '' ,
    //         // image should not be set to a preview URL, just leave it undefined
    //         slug: post?.slug || '',
    //         content: post?.content || '',
    //         status: post?.status || 'active',
    //     }
    // })

    const { register, handleSubmit, watch, setValue, control, getValues, reset } = useForm({
        defaultValues: {
            title: '',
            slug: '',
            content: '',
            status: 'active',
        }
    })

    React.useEffect(() => {
        if (post) {
            reset({
                title: post.title || '',
                slug: post.slug || '',
                content: post.content || '',
                status: post.status || 'active',
            })
        }
    }, [post, reset])
    
    const navigate = useNavigate()
    const userData = useSelector((state) => (state.auth.userData))

    const submit = async (data) => {
        try {
            if (post) {
                let file = null

                if (data.image && data.image[0]) {
                    // Wait for upload to complete
                    file = await appwriteService.uploadFile(data.image[0])

                    // Delete the old file only if upload succeeds and there was an old image
                    if (file && post.featuredImage) {
                        await appwriteService.deleteFile(post.featuredImage)
                    }
                }

                const updatedPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage, // retain old image if new one not uploaded
                })

                if (updatedPost) {
                    navigate(`/post/${updatedPost.$id}`)
                }

            } else {
                // Creating new post
                const file = await appwriteService.uploadFile(data.image[0])

                if (file) {
                    const fileId = file.$id

                    data.featuredImage = fileId

                    const dbPost = await appwriteService.createPost({
                        ...data,
                        userId: userData.$id,
                    })

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        } catch (error) {
            console.error("Submit error:", error.message)
        }
    }


    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        return '';

    }, [])


    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })

        return () => subscription.unsubscribe()

    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default Postform