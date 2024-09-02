<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()



</script>

<template>
 <div class="header">
     <div class="action">
         <ul>
             <li><button>Image</button></li>
             <li><button>Text</button></li>
             <li><button>Ellipse</button></li>
             <li><button>Line</button></li>
             <li><button>Arrow</button></li>
             <li><button>Arrow One</button></li>
              <li><button>Save As  </button></li>
         </ul>
     </div>
 </div>
</template>

<style scoped>
.header{
    position: fixed;
    top: 0px;
    left: 0px;
    height: 60px;
    right: 0px;
    padding: 0px;
    box-shadow: 0 0 .4rem #0000004d;
    filter: drop-shadow(0 0 1.2rem rgba(255, 255, 255, .6));
}
.action{
  padding: 0px;
  margin: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
.action ul{
   display: flex;
   flex-direction: row;
   padding: 0px;
   margin: 0px;
}
.action ul li{
  margin-right: 20px;
}
</style>
