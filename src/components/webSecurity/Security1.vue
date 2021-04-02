<template>
  <div security1>
    <transition name="fade">
      <div>
        <h1>웹 보안</h1>
        <div class="content">
          <h2>인증 및 승인</h2>
          <p><s>인증 (authentication) :</s> 보안 자격 증명 (암호, 보안 질문에 대한 대답, 지문 스캔 등)을 올바르게 제공했기 때문에 그 사람이 특정 사용자인지 (또는 그렇게 보이는지) 확인합니다.</p>
          <p><s>승인 (authorization) :</s> 특정 사용자가 특정 리소스에 대한 접근 권한을 갖거나 특정 조치를 수행할 수있는 권한을 부여 받았는지 확인합니다.</p>
          <p>- '인증’이란 개체가 누구인지 아는 것<br>- ‘승인’이란 권한이 주어진 개체가 무엇을 할 수 있는지 아는 것</p>
        </div>
        <div class="content">
          <h2>인젝션 결함</h2>
          <p><s>인증 (authentication) :</s> 보안 자격 증명 (암호, 보안 질문에 대한 대답, 지문 스캔 등)을 올바르게 제공했기 때문에 그 사람이 특정 사용자인지 (또는 그렇게 보이는지) 확인합니다.</p>
          <p><s>승인 (authorization) :</s> 특정 사용자가 특정 리소스에 대한 접근 권한을 갖거나 특정 조치를 수행할 수있는 권한을 부여 받았는지 확인합니다.</p>
          <p>- '인증’이란 개체가 누구인지 아는 것<br>- ‘승인’이란 권한이 주어진 개체가 무엇을 할 수 있는지 아는 것</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Security1"
}
</script>

<style lang="less">
  @import "~@/less/asset";
  [security1] {
    .content { .m(20,0); .-b(#333); .pb(20);
      h2 { .m(20,0); }
      p { .lh(30);   s { .bold; }}
    }
  }

</style>