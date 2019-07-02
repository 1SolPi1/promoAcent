<template>
  <div class="containerUpload">
    <img src="@/assets/img/close.png" class="closeupload" @click="$emit('close')">
    <div class="model" v-show="model" @click="model = false">
      <div class="model-show">
        <img :src="modelSrc" alt="">
      </div>
    </div>
    <div class="cut">
      <vue-cropper ref="cropper" :img="option.img" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
                   :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                   :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight" :center-box="option.centerBox"
                   @real-time="realTime" :high="option.high" @img-load="imgLoad" ></vue-cropper>
    </div>
    <div class="test-button">
      <label class="btn" for="uploads"><img src="@/assets/img/uploadAvatar/uploadAvatar.png" alt="Загрузить фото"></label>
      <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg"
             @change="uploadImg($event, 1)">
      <button @click="changeScale(1)" class="btn"><img src="@/assets/img/uploadAvatar/plusZoom.png" alt="Увеличить" style="width: 24px"></button>
      <button @click="changeScale(-1)" class="btn"><img src="@/assets/img/uploadAvatar/minusZoom.png" alt="Уменшить" style="width: 24px"></button>
      <button @click="rotateLeft" class="btn"><img src="@/assets/img/uploadAvatar/rotateLeft.png" alt="Поверните влево"></button>
      <button @click="rotateRight" class="btn"><img src="@/assets/img/uploadAvatar/rotateRight.png" alt="Поверните вправо"></button>
      <button @click="finish('base64')" class="btn"><img src="@/assets/img/uploadAvatar/prewiewAvatar.png" alt="Превью"></button>
      <a @click="down('base64')" class="btn"><img src="@/assets/img/uploadAvatar/saveAvatar.png" alt="Сохранить изображение"></a>
    </div>
  </div>
</template>

<script>
  import { VueCropper }  from "vue-cropper"
  export default {
        name: "UploadAvatar",
      data () {
          return {
            model: false,
            modelSrc: '',
            crap: false,
            previews: {},
            option: {
              img: '',
              size: 1,
              full: false,
              outputType: 'png',
              canMove: true,
              fixedBox: true,
              original: false,
              canMoveBox: false,
              autoCrop: true,
              autoCropWidth: 175,
              autoCropHeight: 175,
              centerBox: false,
              high: true
            },
            show: true
          }
      },
      components: {
        VueCropper
      },
      methods: {
        rotateLeft() {
          this.$refs.cropper.rotateLeft()
        },
        rotateRight() {
          this.$refs.cropper.rotateRight()
        },
        finish() {           this.$refs.cropper.getCropData((data) => {
          this.model = true;
          this.modelSrc = data
        })

        },
        realTime(data) {
          this.previews = data
          console.log(data)
        },
        changeScale(num) {
          num = num || 1
          this.$refs.cropper.changeScale(num)
        },

        down() {
          this.$refs.cropper.getCropData((data) => {
              this.downImg = data;
              var upload = new FormData();
              upload.append('avatar', this.downImg);

              this.$http({
                method: 'POST',
                url: 'user/profile/set-avatar',
                data: upload,
                headers: {'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + localStorage.getItem('token')}
              })
                .then(function () {
                  location.reload()
                })
                .catch(error => {
                  console.error(error);
                });
            })
        },

        uploadImg(e, num) {
          var file = e.target.files[0]
          if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
            alert('Тип изображения должен быть.gif,jpeg,jpg,png,bmp')
            return false
          }
          var reader = new FileReader()
          reader.onload = (e) => {
            let data
            if (typeof e.target.result === 'object') {

              data = window.URL.createObjectURL(new Blob([e.target.result]))
            } else {
              data = e.target.result
            }
            if (num === 1) {
              this.option.img = data
            } else if (num === 2) {
              this.example2.img = data
            }
          };
          reader.readAsArrayBuffer(file)
        },
        imgLoad(msg) {
          console.log(msg)
        }
      },
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .containerUpload{
    position: fixed;
    z-index: 3000;
    top: 0;
    left: 0;
    overflow: scroll;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.9);
  }

  .cut {
    width: 500px;
    height: 400px;
    margin: 30px auto;
  }


  .test-button {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin:20px 10px 0px 0px;
    padding: 9px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background: #50bfff;
    border: 1px solid #50bfff;
    transition: all .2s ease;
    text-decoration: none;
    user-select: none;
  }


  code.language-html {
    padding: 10px 20px;
    margin: 10px 0px;
    display: block;
    background-color: #333;
    color: #fff;
    overflow-x: auto;
    font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono,sans-serif;
    border-radius: 5px;
    white-space: pre;
  }


  .show-info h2 {
    line-height: 50px;
  }

  .model {
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .model-show {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .model img {
    display: block;
    margin: auto;
    max-width: 80%;
    user-select: none;
    background-size: 20px 20px;
    background: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%) 0px 0px, 10px 10px;
  }

  @keyframes slide {
    0%  {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

  .closeupload{
    float: right;
    cursor: pointer;
    margin: 10px;
  }

</style>
