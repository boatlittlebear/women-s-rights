sceneList = ['first_page_cause', 'scene1', 'scene2', 'scene3', 'scene4', 'scene5', 'last_page_cause'];
count = 0;

function NextPrevScene(){
    if(count < 0){
        count = 0;
    }
    else if(count >= sceneList.length){
        count = sceneList.length-1;
    }
    page.dataset.scene = sceneList[count%(sceneList.length)];

    console.log("Count : " + count);
    console.log("Scene Number : " + count%(sceneList.length));
    console.log("Scene : " + sceneList[count%(sceneList.length)]);
}