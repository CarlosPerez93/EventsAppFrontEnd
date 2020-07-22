const jwtDecode = require("jwt-decode");
 class Token {
  decodeJWT = (token) => jwtDecode(token || this.getToken());

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token) {
    return localStorage.setItem("token", token);
  }

  isValid(){
    try{
      const resp = this.decodeJWT();
       return resp;
    }catch(e){
       return false;
    }
  }
}

export default new Token();