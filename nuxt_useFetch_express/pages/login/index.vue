<template>
  <div>
      <v-app>
          <v-main>
              <v-container class="fill-height" fluid>
                  <v-row class="d-flex align-center justify-center">
                      <v-card  width="400">
                  
                      <v-card-title class="bg-warning mb-5">使用者登入</v-card-title>
                      <v-card-text>
                        <v-form>
                            <div class="flex-container">
                                <v-text-field
                                    v-model="account"
                                    label="帳號"
                                ></v-text-field>
                            </div>

                            <div class="flex-container">
                                <v-text-field
                                    v-model="password"
                                    label="密碼"
                                    type="password"
                                  ></v-text-field>
                            </div> 
                        </v-form>
                      </v-card-text>
                      <v-divider class="my-2"></v-divider>
                      <v-card-actions class="my-1 d-flex align-center justify-center">
                      <v-btn
                        class="mr-1 bg-warning w-50"
                        @click="login"
                        >登入
                      </v-btn>
                    </v-card-actions>
              </v-card>
                  </v-row>
              </v-container>   
          </v-main> 
      </v-app>
  </div>
</template>
<script>

import { login } from "../services/accountService";

export default {
name: "nuxt-app",
components: {
  
},
data() {
  return {
    account: "",
    password: "",
  };
},
mounted() {
},
methods: {
  async login() {

      console.log("Hi")
      let data = {
        account: this.account,
        password: this.password
      };
      let res = await login(data);
    }
  },
};

</script>
<style>

.flex-container {
display: flex;
align-items: center; 
}

</style>