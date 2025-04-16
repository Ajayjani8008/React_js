import envConfig from "../envConfig/envConfig.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(envConfig.appwriteUrl).setProject(envConfig.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug,
                {
                    title,
                    // slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite server :: createPost error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug,
                {
                    title,
                    // slug,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite server :: updatePost error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug
            )
            return true

        } catch (error) {
            console.log("Appwrite server :: deletePost error", error);
            return false

        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite server :: getPost error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite server :: listPosts error", error);
            return false
        }
    }


    // File upload  Service 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                envConfig.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite server :: uploadFile error", error);
            return false

        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                envConfig.appwriteBucketId,
                fileId
            )

        } catch (error) {
            console.log("Appwrite server :: deleteFile error", error);
            return false
        }
    }

    getFilePriview(fileId) {
        return this.bucket.getFileView(
            envConfig.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service

export default service