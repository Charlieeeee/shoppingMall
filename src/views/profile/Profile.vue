<template>
 <div class="profile">
   <nav-bar class="profile-bar">
     <div slot="center">我的</div>
   </nav-bar>
   <personal-message/>
   <discount/>
   <other-message/>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import PersonalMessage from './childrenCom/PersonalMessage'
import Discount from './childrenCom/Discount'
import OtherMessage from './childrenCom/OtherMessage'

export default {
  name:'Profile',
  components:{
    NavBar,
    PersonalMessage,
    Discount,
    OtherMessage
  }
}

</script>
<style scoped>
.profile-bar{background: var(--color-tint);color: #ffffff;}
</style>