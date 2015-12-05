/**
 * Created by WangoeWoe on 05.12.15.
 */
(function () {

  angular
    .module('SignupModule')
    .service('AddUserService', AddUserService);

  /*
  * Adding a user after a signup
  *
  * */
  function AddUserService (Server, $http) {
      this.signup = function (username, password, email, forname, surname, mobile) {
        $http.post(Server + '/users', {
          username:       username,
          password:       password,
          email:          email,
          forname:        forname,
          surname:        surname,
          mobile_phone:   mobile
        }).then(function (data) {
          console.log(data);
        })
      }
  }
})();
