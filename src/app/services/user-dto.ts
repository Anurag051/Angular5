import { UserRegistration } from '../utility/user-registration';
export class UserDto {

userDetails = new UserRegistration();
    init(userInfo:any){
        this.userDetails.address="";
        this.userDetails.firstName =userInfo.firstName;
        console.log("Data after registration : "+JSON.stringify(this.userDetails));
    }
}
