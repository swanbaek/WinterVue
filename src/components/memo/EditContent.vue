<template>
<div class="col-md-4 col-sm-12 col-xs-12 p-3" >
    <div class="card" >
        <img src="images/memo2.png"  class="card-img-top img img-thumbnail" style="height:350px" />
        <div class="card-img-overlay text-center">
			<form action="memoEdit.jsp" method="post" class="mt-2">
				<input type="hidden" name="idx"><p></p>
				<input type="text" name="title" placeholder="제목"  class="form-control" >
				<p></p>
				<textarea name="msg" placeholder="메모내용" class="form-control mt-2"></textarea>
				<span class="badge badge-success">작성일: a	</span><p></p>
				<button type="submit" class="btn btn-outline-info">글수정</button>
			</form> 
		</div>
    </div> 
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>