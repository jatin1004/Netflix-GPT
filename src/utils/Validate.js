

export const checkValidate = (email, password) => {
    const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //const iscnfrmPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(cnfrmpassword);

    if(!isEmailValidate) return "* Email is not valid";
    if(!isPasswordValidate) return "* Password is not valid";
    // if(!iscnfrmPasswordValidate) return "* Confirm Password is not valid";
    // if(cnfrmpassword != password) return "* Password and Confirm Password are not same";
    

    return null;
}