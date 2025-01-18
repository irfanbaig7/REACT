import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.databases);
    this.bucket = new Storage(this.bucket);
  }

  async createPost({ title, slug, content, featureImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImg,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Error Founded in CreatePost !:", error);
    }
  }

  async updatePost(slug, { title, content, featureImg, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImg,
          status,
        }
      );
    } catch (error) {
      console.error("Error Founded in updatePost !:", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error Founded in deletePost !:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error Founded in getPost !:", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Error Founded in getPost !:", error);
      return false;
    }
  }


  
  async uploadeFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Error Founded in getPost !:", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
      console.error("Error Founded in getPost !:", error);
      return false;
    }
  }

  getFilePriview(fileId){
    return this.bucket.getFilePriview(
        conf.appwriteBucketId,
        fileId
    )
  }



}
const service = new Service();
export default service;
