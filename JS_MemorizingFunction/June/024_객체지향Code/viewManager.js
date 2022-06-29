// 뷰매니저 함수가 텍스트매니저에 의존, 이것을 의존주입, Dependency Injection

class ViewManager {
    constructor(textManager, options){
        if(textManager.constructor !== TextManager){
            throw Error('textManger의 객체 전달 실패');
        }

        if(!options.btnEl || !options.inpTxt || !options.viewerEl){
            throw Error('전달받는 요소 중 빈값이 존재');
        }

        this.textManager =textManager;
        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;

        options.btnEl.addEventListener("click", () => {
            this.changeValue();
        })
    }

    changeValue() {
        this.textManager.setValue({data : this.inpTxt.value});
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}