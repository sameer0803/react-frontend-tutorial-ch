import conf from '../config/conf.js';
import { Client, Account,ID } from 'appwrite';

export class AuthService{
      client = new Client();
         account ;

        constructor(){
            this.client
            .setEndpoint(conf.appWriteURL) // Your API Endpoint
            .setProject(conf.appWriteProjectID); 
            this.account=new Account(this.client);// Your project ID

}
async createAccount({email, password, name}) {
    try {
       const UserAccount= await this.account.create( ID.unique(),email, password, name);
        if(UserAccount){
            console.log('Account created successfully:', UserAccount);
            this.login({email,password});
            return UserAccount;
        }
        else{
            console.log('Account creation failed:', UserAccount);
            return null;
        }
        
    } catch (error) {
        console.error('Error creating account:', error);
        throw error;
    }

}
async login({email,password}){
    try{
       return  await this.account.createSession(email,password);
        console.log('Login successful');
    }catch(error){
        console.error('Login failed:', error);
        throw error;
    }
} 
async logout(){
    try{
        return await this.account.deleteSession('current');
        console.log('Logout successful');
    }catch(error){
        console.error('Logout failed:', error);
        throw error;
    }
}
async getCurrentUser(){
        try{
            return await this.account.get();
            console.log('User fetched successfully');
        }catch(error){
            console.error('Error fetching user:', error);
            throw error;
        }
        return null;
    }

}


const authService = new AuthService(); 


export default authService;
