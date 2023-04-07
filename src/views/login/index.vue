<template>
  <div class="bigcontainer">
    <div  class="login-container">
      <el-card class="login-card">
        <h3 class="login-title">Login</h3>
      <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="rules" label-width="80px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="loginForm.username" class="login-input"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="loginForm.password" class="login-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm">Login</el-button>
        </el-form-item>
      </el-form>
      <div class="login-footer">
        <span>Don't have an account?</span>
        <router-link to="/register">Sign up</router-link>
      </div>
    </el-card>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
        password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push('/home')
        } else {
          console.log('Login failed.')
        }
      })
    }
  }
}
</script>



<style scoped>
.bigcontainer{
  position: fixed;
  position: ;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.login-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
}

.login-form {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
}

.login-input {
  border-radius: 5px;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.login-btn {
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #409eff;
  border-color: #409eff;
}

.login-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
}

.login-footer span {
  margin-right: 5px;
}

.login-footer a {
  color: #409eff;
}
</style>
