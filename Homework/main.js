const customTag = {
    tagName: 'h2',
    textContent: "나만의 태그",
    styles: {
        color: "orange",
        fontSize: "2em",
    },
    id: "",
    class: [],
    changeTagName: function (tagName) {
        this.tagName = tagName;
        this.render('container');
        return this;
    },
    changeTextContent: function (textContent) {
        this.textContent = textContent;
        this.render('container');
        return this;
    },
    changeStyles: function (styleName, value) {
        if (!this.styles[styleName]) {
            console.error(`Style ${styleName} does not exist.`);
            return this;
        }
        else {
            this.styles[styleName] = value;
            this.render('container');
            return this;
        }
    },
    setId: function (id) {
        this.id = id;
        this.render('container');
        return this;
    },
    addClassName: function (className) {
        this.class.push(className);
        this.render('container');
        return this;
    },
    removeClassName: function (className) {
        const index = this.class.indexOf(className);
        if (index !== -1) {
            this.class.splice(index, 1);
        }
        this.render('container');
        return this;
    },

    // 여기 아래 부분은 수정하지 마시오.
    toHTML() {
        // 클래스 문자열 생성
        const classString = this.class.length > 0 ?
            ` class="${this.class.join(' ')}"` : '';

        // ID 문자열 생성
        const idString = this.id ? ` id="${this.id}"` : '';

        // 스타일 문자열 생성
        let styleString = '';
        for (const property in this.styles) {
          styleString += `${(property=='fontSize')?'font-size':property}: ${this.styles[property]}; `;
        }
        styleString = styleString ? ` style="${styleString.trim()}"` : '';

        // 완성된 HTML 태그 반환
        return `<${this.tagName}${idString}${classString}${styleString}>${this.textContent}</${this.tagName}>`;
    },
    // DOM에 렌더링
    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            // 기존 내용을 지우고 새로 렌더링
            container.innerHTML = '';
            // 새 HTML 태그 추가
            container.innerHTML += this.toHTML();
        } else {
            console.error(`Container with ID "${containerId}" not found.`);
        }
    }
}