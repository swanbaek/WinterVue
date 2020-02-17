<template>
<div class="col-md-4 col-sm-12 col-xs-12 p-3" >
    <div class="card" >
        <img src="images/memo02.PNG"  class="card-img-top img img-thumbnail" style="height:350px" />
        <div class="card-img-overlay text-center">
			<form action="memoEdit.jsp" method="post" class="mt-2"  v-on:submit.prevent="editProcess">
				<input type="hidden" name="no" :value="editMemo.no"><p></p>
				<input type="hidden" name="wdate" :value="editMemo.wdate"><p></p>
				<input type="text" name="title" placeholder="제목"  class="form-control" :value="editMemo.title">
				<p></p>
				<textarea name="msg" placeholder="메모내용" class="form-control mt-2"  :value="editMemo.msg"></textarea>
				<span class="badge badge-success">작성일: {{editMemo.wdate}}	</span><p></p>
				<button type="submit" class="btn btn-outline-info">글수정</button>
			</form> 
		</div>
    </div> 
</div>
</template>

<script>
    export default {
		props:['editMemo'],
		data(){
			return {
				memo:{
					no:0,
					title:'',
					msg:'',
					wdate:''
				}
			}
		},
		
		methods:{
			editProcess:function(e){
				var isLogin=sessionStorage.getItem("isLogin");
				if(isLogin==='false'){
					alert('로그인을 해야 수정 가능합니다.');
					this.$router.push('/login');
					return;
				}
				var tmpMemo={
					no:e.target.no.value,
					title:e.target.title.value,
					msg:e.target.msg.value,
					wdate:e.target.wdate.value
				};
				
				this.$emit('editEnd',tmpMemo);	
			}
		}
        
    }
</script>

<style lang="scss" scoped>

</style>