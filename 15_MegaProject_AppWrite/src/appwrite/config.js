import conf from "../config/conf.js";
import { Client, ID,Account, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  account;
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteURL) // Your API Endpoint
      .setProject(conf.appWriteProjectID); // Your project ID
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log('App Write CreatePOST me error ":', error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log('Update POST  ":', error);
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slug
      );
    } catch (error) {
      console.log('Delete POST  ":', error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slug
      );
    } catch (error) {
      console.log('Get POST  ":', error);
      return false;
    }
  }
  async getPosts(query=[Query.equal('status', 'active')]) {
        try {
        return await this.databases.listDocuments(
            conf.appWriteDatabaseID,
            conf.appWriteCollectionID,
            query,
    
          
        );
        } catch (error) {
        console.log('Get POST  ":', error);
        return false;
        }
    }
    //file Upload service
    async uploadFile(file) {
        try {
           return await  this.storage.createFile(
                conf.appWritebucketID,
                ID.unique(),
                file
            );
           
        } catch (error) {
            console.log('File Upload Error: ', error);
            return false;
        }
    }
     //file Delete service
    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                conf.appWritebucketID,
                fileId
            );
        } catch (error) {
            console.log('File Delete Error: ', error);
            return false;
        }

      }

      getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(conf.appWritebucketID, fileId);
        } catch (error) {
            console.log('Get File Preview Error: ', error);
            return false;
        }

}
}
const service = new Service();

export default service;
