(function(){var t={382:function(t,e,o){var r={"./1.png":935,"./2.png":372,"./4.png":314,"./5.png":315,"./background.png":964,"./background_product.png":204};function s(t){var e=c(t);return o(e)}function c(t){if(!o.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=c,t.exports=s,s.id=382},843:function(t,e,o){"use strict";var r=o(751),s=o(641);function c(t,e){const o=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(o)}var n=o(262);const i={},a=(0,n.A)(i,[["render",c]]);var d=a,u=o(220);const l={class:"home"};function p(t,e,o,r,c,n){const i=(0,s.g2)("HeadBlock"),a=(0,s.g2)("MainBlock");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bF)(i),(0,s.bF)(a)])}var g=o(33);const k={class:"head"},h=(0,s.Lk)("a",null,"НАША ПРОДУКЦИЯ",-1),m={class:"head_shopping"},v={class:"head_shopping_text"},P={class:"head_shopping_bt"};function b(t,e,o,r,c,n){const i=(0,s.g2)("BasketIcon"),a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",k,[h,(0,s.Lk)("div",m,[(0,s.Lk)("div",v,[(0,s.Lk)("p",null,(0,g.v_)(n.countProductsInBasket)+" товара",1),(0,s.Lk)("p",null,"на сумму "+(0,g.v_)(n.allPriceProductsInBasket)+" ₽",1)]),(0,s.bF)(a,{to:"/shopping"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",P,[(0,s.bF)(i)])])),_:1}),(0,s.bF)(a,{to:"/",class:"exit",id:"exitButton"},{default:(0,s.k6)((()=>[(0,s.eW)("Выйти")])),_:1})])])}var f=o(278);const B={class:"basket-icon",width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C=(0,s.Lk)("g",{"clip-path":"url(#clip0_1_89)"},[(0,s.Lk)("path",{d:"M20.0746 9.20414H16.1774L13.379 1.23897C13.2096 0.756825 12.6815 0.503193 12.1992 0.672633C11.717 0.842026 11.4635 1.37024 11.6329 1.85243L14.2157 9.2041H6.78427L9.36711 1.85243C9.5365 1.37024 9.28296 0.842026 8.80077 0.672633C8.31871 0.503193 7.79041 0.756825 7.62102 1.23897L4.82263 9.20414H0.925386C0.414318 9.20414 0 9.61841 0 10.1295C0 10.6406 0.414318 11.0549 0.925386 11.0549H1.17893L3.44649 19.3309C3.61625 19.9505 4.17934 20.38 4.82171 20.38H16.2413C16.8871 20.38 17.4522 19.946 17.6189 19.3221L19.8274 11.0549H20.0746C20.5857 11.0549 21 10.6406 21 10.1295C21 9.61846 20.5857 9.20414 20.0746 9.20414ZM7.46785 17.3549C7.46785 17.866 7.05353 18.2803 6.54246 18.2803C6.03139 18.2803 5.61708 17.866 5.61708 17.3549V12.6562C5.61708 12.1451 6.03139 11.7308 6.54246 11.7308C7.05353 11.7308 7.46785 12.1451 7.46785 12.6562V17.3549ZM11.4254 17.3549C11.4254 17.866 11.011 18.2803 10.5 18.2803C9.98891 18.2803 9.57459 17.866 9.57459 17.3549V12.6562C9.57459 12.1451 9.98891 11.7308 10.5 11.7308C11.011 11.7308 11.4254 12.1451 11.4254 12.6562V17.3549ZM15.3829 17.3549C15.3829 17.866 14.9686 18.2803 14.4575 18.2803C13.9464 18.2803 13.5321 17.866 13.5321 17.3549V12.6562C13.5321 12.1451 13.9464 11.7308 14.4575 11.7308C14.9686 11.7308 15.3829 12.1451 15.3829 12.6562V17.3549Z",fill:"white"})],-1),I=(0,s.Lk)("defs",null,[(0,s.Lk)("clipPath",{id:"clip0_1_89"},[(0,s.Lk)("rect",{width:"21",height:"21",fill:"white"})])],-1),L=[C,I];function _(t,e,o,r,c,n){return(0,s.uX)(),(0,s.CE)("svg",B,L)}var w={name:"BasketIcon",components:{},props:{}};const E=(0,n.A)(w,[["render",_]]);var y=E,x={name:"HeadBlock",components:{BasketIcon:y},computed:{...(0,f.L8)(["getCountProductsInBasket","getAllPriceProductsInBasket"]),countProductsInBasket(){return this.getCountProductsInBasket},allPriceProductsInBasket(){return this.getAllPriceProductsInBasket}},props:{}};const F=(0,n.A)(x,[["render",b]]);var S=F;const A={class:"content_main"},T={class:"content_main_cards1"};function O(t,e,o,r,c,n){const i=(0,s.g2)("CardProduct");return(0,s.uX)(),(0,s.CE)("div",A,[(0,s.Lk)("div",T,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.products,(t=>((0,s.uX)(),(0,s.Wv)(i,{key:t.id,productId:t.id,imageSrc:t.img,title:t.title,subtitle:t.subtitle,price:t.price,isActiveSubtitle:!0,isInBasket:n.isInBasket(t.id),onCardClick:e=>n.goToProductPage(t)},null,8,["productId","imageSrc","title","subtitle","price","isInBasket","onCardClick"])))),128))])])}const X=["src"],j={class:"card_countBt_count"};function $(t,e,r,c,n,i){const a=(0,s.g2)("AddIcon"),d=(0,s.g2)("DeleteIcon");return(0,s.uX)(),(0,s.CE)("div",{class:(0,g.C4)(["card",r.customClass]),style:(0,g.Tr)(r.customStyle)},[(0,s.Lk)("div",{style:(0,g.Tr)(r.customImgStyle),class:"card_foto",onClick:e[0]||(e[0]=(...t)=>i.goToProductPage&&i.goToProductPage(...t))},[(0,s.Lk)("img",{src:o(382)(`./${r.imageSrc}`)},null,8,X)],4),(0,s.Lk)("p",{style:(0,g.Tr)(r.customTitleStyle),class:"card_title",onClick:e[1]||(e[1]=(...t)=>i.goToProductPage&&i.goToProductPage(...t))},(0,g.v_)(r.title),5),r.isActiveSubtitle?((0,s.uX)(),(0,s.CE)("p",{key:0,class:(0,g.C4)([{active:r.isActiveSubtitle},"card_subtitle"]),onClick:e[2]||(e[2]=(...t)=>i.goToProductPage&&i.goToProductPage(...t))},(0,g.v_)(r.subtitle),3)):(0,s.Q3)("",!0),(0,s.Lk)("div",{style:(0,g.Tr)(r.customCountBtStyle),class:"card_countBt"},[(0,s.Lk)("p",j,(0,g.v_)(r.price)+" ₽",1),r.isInBasket?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(a,{key:0,onClick:i.addToBasket},null,8,["onClick"])),r.isInBasket?((0,s.uX)(),(0,s.Wv)(d,{key:1,onClick:i.removeFromBasket},null,8,["onClick"])):(0,s.Q3)("",!0)],4)],6)}const R=t=>((0,s.Qi)("data-v-d64c4c92"),t=t(),(0,s.jt)(),t),M={class:"card_btn"},Q=R((()=>(0,s.Lk)("svg",{class:"card_btn-icon",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,s.Lk)("circle",{cx:"15",cy:"15",r:"14.5",stroke:"white"}),(0,s.Lk)("path",{d:"M14.9999 9.28564V20.3571",stroke:"white","stroke-width":"2","stroke-linecap":"round"}),(0,s.Lk)("path",{d:"M20.3571 14.8214L9.28564 14.8214",stroke:"white","stroke-width":"2","stroke-linecap":"round"})],-1))),H=[Q];function N(t,e,o,r,c,n){return(0,s.uX)(),(0,s.CE)("button",M,H)}var V={name:"ButtonUI",components:{},props:{}};const J=(0,n.A)(V,[["render",N],["__scopeId","data-v-d64c4c92"]]);var D=J;const W={class:"delete-icon",width:"30",height:"30",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg"},K=(0,s.Fv)('<circle class="delete-icon-circle" cx="15" cy="15" r="14.5" data-v-275f6f36></circle><g clip-path="url(#clip0_0_109)" data-v-275f6f36><path class="delete-icon-path" d="M15.7041 15.0789L21.1218 20.4966C21.2723 20.6471 21.2723 20.891 21.1218 21.0415C21.0467 21.1168 20.948 21.1543 20.8495 21.1543C20.7508 21.1543 20.6523 21.1168 20.5771 21.0415L15.1187 15.583L9.6602 21.0415C9.58485 21.1168 9.48635 21.1543 9.38786 21.1543C9.28937 21.1543 9.19068 21.1168 9.11552 21.0415C8.96501 20.891 8.96501 20.6471 9.11552 20.4966L14.5331 15.0789L9.11189 9.65731C8.96137 9.50679 8.96137 9.26295 9.11189 9.11244C9.2624 8.96211 9.50624 8.96211 9.65657 9.11244L15.1185 14.5747L20.581 9.11263C20.7315 8.96231 20.9751 8.96231 21.1256 9.11263C21.2762 9.26314 21.2762 9.50699 21.1256 9.6575L15.7041 15.0789Z" data-v-275f6f36></path></g><defs data-v-275f6f36><clipPath id="clip0_0_109" data-v-275f6f36><rect width="12.24" height="12.24" fill="white" transform="matrix(-1 0 0 1 21.2402 9)" data-v-275f6f36></rect></clipPath></defs>',3),U=[K];function Z(t,e,o,r,c,n){return(0,s.uX)(),(0,s.CE)("svg",W,U)}var z={name:"DeleteIcon",components:{},props:{}};const q=(0,n.A)(z,[["render",Z],["__scopeId","data-v-275f6f36"]]);var G=q,Y={name:"CardProduct",components:{AddIcon:D,DeleteIcon:G},props:{id:Number,productId:Number,customClass:String,customStyle:Object,customImgStyle:Object,imageSrc:String,title:String,subtitle:String,isActiveSubtitle:Boolean,customTitleStyle:Object,customCountBtStyle:Object,isInBasket:Boolean,price:Number},methods:{...(0,f.i0)(["addProductToBasket","removeProductFromBasket"]),addToBasket(){const t={id:this.productId,img:this.imageSrc,title:this.title,price:this.price};this.addProductToBasket(t)},removeFromBasket(){this.removeProductFromBasket(this.productId)},goToProductPage(){this.$emit("card-click",this.productId)}}};const tt=(0,n.A)(Y,[["render",$]]);var et=tt,ot={name:"MainBlock",components:{CardProduct:et},computed:{...(0,f.L8)(["getProducts","getBasketProducts"]),products(){return this.getProducts},isInBasket(){return t=>this.getBasketProducts.some((e=>e.id===t))}},created(){const t=JSON.parse(localStorage.getItem("vuex-state"));t&&this.$store.replaceState(t)},methods:{goToProductPage(t){this.$router.push({name:"ProductPage",params:{id:t.id},state:{title:t.title,price:t.price,img:t.img}})}}};const rt=(0,n.A)(ot,[["render",O],["__scopeId","data-v-2bce8123"]]);var st=rt,ct={name:"MainPage",components:{HeadBlock:S,MainBlock:st}};const nt=(0,n.A)(ct,[["render",p]]);var it=nt;const at=t=>((0,s.Qi)("data-v-ede0b3f2"),t=t(),(0,s.jt)(),t),dt={class:"basket_head"},ut=at((()=>(0,s.Lk)("a",{class:"basket_head-title"},"КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ",-1))),lt=at((()=>(0,s.Lk)("button",{class:"exit",id:"exitButton"},"Выйти",-1))),pt={class:"backet_cards"},gt={class:"backet_decoration"},kt={class:"backet_decoration-text"},ht=at((()=>(0,s.Lk)("p",{class:"title"},"ЗАКАЗ НА СУММУ:",-1))),mt={class:"count"},vt=["disabled"];function Pt(t,e,o,r,c,n){const i=(0,s.g2)("BackIcon"),a=(0,s.g2)("router-link"),d=(0,s.g2)("CardProduct");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",dt,[(0,s.bF)(i,{class:"back-icon",onClick:e[0]||(e[0]=t=>this.$router.go(-1))}),ut,(0,s.bF)(a,{to:"/"},{default:(0,s.k6)((()=>[lt])),_:1})]),(0,s.Lk)("div",pt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.basketProducts,(t=>((0,s.uX)(),(0,s.Wv)(d,{key:t.id,customClass:"custom-card",customStyle:{border:"none",gap:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",width:"100%",height:"auto",padding:"16px 0"},customTitleStyle:{width:"100%"},customImgStyle:{height:"132px",width:"auto"},customCountBtStyle:{gap:"16px",justifyContent:"flex-end"},imageSrc:t.img,title:t.title,price:t.price,productId:t.id,isInBasket:!0,isActiveSubtitle:!1,onRemoveProduct:n.removeFromBasket,onCardClick:e=>n.goToProductPage(t)},null,8,["imageSrc","title","price","productId","onRemoveProduct","onCardClick"])))),128))]),(0,s.Lk)("div",gt,[(0,s.Lk)("div",kt,[ht,(0,s.Lk)("p",mt,(0,g.v_)(n.allPriceProductsInBasket)+" ₽",1)]),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>n.handleOrder&&n.handleOrder(...t)),disabled:0===n.basketProducts.length,class:(0,g.C4)({decor_bt:!0,"decor_bt--disabled":0===n.basketProducts.length})}," Оформить заказ ",10,vt)])],64)}const bt={class:"back-icon",width:"40",height:"40",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ft=(0,s.Fv)('<circle cx="16" cy="16" r="15.5" transform="rotate(180 16 16)" stroke="#FFA500" data-v-6a846fbb></circle><g clip-path="url(#clip0_0_127)" data-v-6a846fbb><path d="M14.6514 13.0469C14.7868 12.9115 14.9998 12.9115 15.1352 13.0469C15.2659 13.1776 15.2659 13.3953 15.1352 13.5258L12.6823 15.9786H20.7765C20.9652 15.9786 21.12 16.1286 21.12 16.3173C21.12 16.506 20.9652 16.6608 20.7765 16.6608H12.6823L15.1352 19.1091C15.2659 19.2445 15.2659 19.4624 15.1352 19.5929C14.9998 19.7282 14.7868 19.7282 14.6514 19.5929L11.6179 16.5593C11.4871 16.4286 11.4871 16.2109 11.6179 16.0804L14.6514 13.0469Z" fill="#FFA500" data-v-6a846fbb></path></g><defs data-v-6a846fbb><clipPath id="clip0_0_127" data-v-6a846fbb><rect width="9.6" height="9.6" fill="white" transform="translate(11.52 11.52)" data-v-6a846fbb></rect></clipPath></defs>',3),Bt=[ft];function Ct(t,e,o,r,c,n){return(0,s.uX)(),(0,s.CE)("svg",bt,Bt)}var It={name:"BackIcon",components:{},props:{}};const Lt=(0,n.A)(It,[["render",Ct],["__scopeId","data-v-6a846fbb"]]);var _t=Lt,wt={name:"BasketPage",components:{BackIcon:_t,CardProduct:et},computed:{...(0,f.L8)(["getBasketProducts","getAllPriceProductsInBasket"]),basketProducts(){return this.getBasketProducts},allPriceProductsInBasket(){return this.getAllPriceProductsInBasket}},methods:{removeFromBasket(t){this.$store.dispatch("removeProductFromBasket",t)},goToProductPage(t){this.$router.push({name:"ProductPage",params:{id:t},state:{title:t.title,price:t.price,img:t.img}})},handleOrder(){this.$store.dispatch("clearBasket"),this.$router.push("/decoration")}},created(){const t=JSON.parse(localStorage.getItem("vuex-state"));t&&this.$store.replaceState(t)},props:{}};const Et=(0,n.A)(wt,[["render",Pt],["__scopeId","data-v-ede0b3f2"]]);var yt=Et;const xt={class:"main"},Ft={class:"container_form"},St={class:"container_form-title",id:"title"},At={class:"container_form-inputLogin"},Tt={key:0,class:"loginError"},Ot={key:1,class:"loginError"},Xt={class:"container_form-inputPassword"},jt={key:0,class:"passwordError"},$t={key:1,class:"passwordError"},Rt={class:"checkbox-container"},Mt={class:"checkbox-label"},Qt={key:0,class:"passlogError"};function Ht(t,e,o,c,n,i){return(0,s.uX)(),(0,s.CE)("div",xt,[(0,s.Lk)("div",Ft,[n.isRegistering?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",{key:0,class:"container_form-buttonRegistr",id:"registrButton",onClick:e[0]||(e[0]=(...t)=>i.toggleForm&&i.toggleForm(...t))},"Зарегистрироваться")),n.isRegistering?((0,s.uX)(),(0,s.CE)("span",{key:1,class:"container_form-buttonAuth",id:"authButton",onClick:e[1]||(e[1]=(...t)=>i.toggleForm&&i.toggleForm(...t))},"Авторизоваться")):(0,s.Q3)("",!0),(0,s.Lk)("p",St,(0,g.v_)(n.isRegistering?"Регистрация":"Вход"),1),(0,s.Lk)("div",At,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"login",placeholder:"Логин",id:"login","onUpdate:modelValue":e[2]||(e[2]=t=>n.login=t)},null,512),[[r.Jo,n.login]]),n.loginError?((0,s.uX)(),(0,s.CE)("span",Tt,"Поле не должно быть пустым")):(0,s.Q3)("",!0),n.loginLengthError?((0,s.uX)(),(0,s.CE)("span",Ot,"Логин должен содержать не менее 4-х символов")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",Xt,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:"password",placeholder:"Пароль",id:"password","onUpdate:modelValue":e[3]||(e[3]=t=>n.password=t)},null,512),[[r.Jo,n.password]]),n.passwordError?((0,s.uX)(),(0,s.CE)("span",jt,"Поле не должно быть пустым")):(0,s.Q3)("",!0),n.passwordLengthError?((0,s.uX)(),(0,s.CE)("span",$t,"Пароль должен содержать не менее 4-х символов")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",Rt,[(0,s.Lk)("label",Mt,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":e[4]||(e[4]=t=>n.subscribe=t)},null,512),[[r.lH,n.subscribe]]),(0,s.eW)(" Я согласен получать обновления на почту ")]),n.generalError?((0,s.uX)(),(0,s.CE)("span",Qt,"Логин или пароль неверен")):(0,s.Q3)("",!0)]),(0,s.Lk)("button",{onClick:e[5]||(e[5]=(...t)=>i.validateForm&&i.validateForm(...t)),class:"container_form-login",id:"loginButton"},(0,g.v_)(n.isRegistering?"Зарегистрироваться":"Войти"),1)])])}var Nt={name:"AuthorizationPage",data(){return{login:"",password:"",subscribe:!1,loginError:!1,loginLengthError:!1,passwordError:!1,passwordLengthError:!1,generalError:!1,isRegistering:!1}},methods:{toggleForm(){this.isRegistering=!this.isRegistering},validateForm(){if(this.loginError=""===this.login.trim(),this.passwordError=""===this.password.trim(),this.isRegistering?(this.loginLengthError=!this.loginError&&this.login.length<4,this.passwordLengthError=!this.passwordError&&this.password.length<4):(this.loginLengthError=!1,this.passwordLengthError=!1),this.loginError||this.passwordError||this.loginLengthError||this.passwordLengthError)this.generalError=!1;else{const t=JSON.parse(localStorage.getItem("users"))||[];if(this.isRegistering)t.push({login:this.login,password:this.password}),localStorage.setItem("users",JSON.stringify(t)),this.generalError=!1,this.toggleForm();else{const e=t.some((t=>t.login===this.login&&t.password===this.password));e?(this.generalError=!1,this.$router.push("/home")):this.generalError=!0}}}}};const Vt=(0,n.A)(Nt,[["render",Ht]]);var Jt=Vt;const Dt={class:"content_product"},Wt={class:"header"},Kt={class:"head_shopping"},Ut={class:"head_shopping_text"},Zt={class:"head_shopping_bt"},zt=(0,s.Lk)("button",{class:"exit",id:"exitButton"},"Выйти",-1),qt={class:"product"},Gt=["src"],Yt={class:"product_description"},te={class:"title"},ee=(0,s.Lk)("p",{class:"description"},"Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. ",-1),oe={class:"countBt"},re={class:"countBt_count"};function se(t,e,r,c,n,i){const a=(0,s.g2)("BackIcon"),d=(0,s.g2)("BasketIcon"),u=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",Dt,[(0,s.Lk)("div",Wt,[(0,s.bF)(a,{onClick:e[0]||(e[0]=t=>this.$router.go(-1))}),(0,s.Lk)("div",Kt,[(0,s.Lk)("div",Ut,[(0,s.Lk)("p",null,(0,g.v_)(i.countProductsInBasket)+" товара",1),(0,s.Lk)("p",null,"на сумму "+(0,g.v_)(i.allPriceProductsInBasket)+" ₽",1)]),(0,s.bF)(u,{to:"/shopping"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",Zt,[(0,s.bF)(d)])])),_:1}),(0,s.bF)(u,{to:"/"},{default:(0,s.k6)((()=>[zt])),_:1})])]),(0,s.Lk)("div",qt,[(0,s.Lk)("img",{class:"product_img",src:o(382)(`./${i.productImg}`)},null,8,Gt),(0,s.Lk)("div",Yt,[(0,s.Lk)("p",te,(0,g.v_)(i.productTitle),1),ee,(0,s.Lk)("div",oe,[(0,s.Lk)("p",re,(0,g.v_)(i.productPrice)+" ₽",1),i.isInBasket?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"countBt_add",onClick:e[2]||(e[2]=(...t)=>i.removeFromBasket&&i.removeFromBasket(...t))},"Удалить из корзины")):((0,s.uX)(),(0,s.CE)("button",{key:0,class:"countBt_bt",onClick:e[1]||(e[1]=(...t)=>i.addToBasket&&i.addToBasket(...t))},"В корзину"))])])])])}var ce={name:"ProductPage",components:{BackIcon:_t,BasketIcon:y},computed:{...(0,f.L8)(["getCountProductsInBasket","getAllPriceProductsInBasket","getBasketProducts"]),countProductsInBasket(){return this.getCountProductsInBasket},allPriceProductsInBasket(){return this.getAllPriceProductsInBasket},productTitle(){return window.history.state?.title},productPrice(){return window.history.state?.price},productImg(){return window.history.state?.img},isInBasket(){return this.getBasketProducts.some((t=>t.id===this.productId))},productId(){return window.history.state?.id}},methods:{...(0,f.i0)(["addProductToBasket","removeProductFromBasket"]),addToBasket(){const t={id:this.productId,img:this.productImg,title:this.productTitle,price:this.productPrice};this.addProductToBasket(t)},removeFromBasket(){this.removeProductFromBasket(this.productId)}}};const ne=(0,n.A)(ce,[["render",se]]);var ie=ne;const ae=t=>((0,s.Qi)("data-v-a787be1c"),t=t(),(0,s.jt)(),t),de={class:"basket_head"},ue=ae((()=>(0,s.Lk)("a",{class:"basket_head-title"},"ОФОРМЛЕНИЕ ЗАКАЗА",-1))),le=ae((()=>(0,s.Lk)("button",{class:"exit",id:"exitButton"},"Выйти",-1))),pe=ae((()=>(0,s.Lk)("div",{class:"container"},[(0,s.Lk)("div",{class:"container_title"}," ЗАКАЗ ОФОРМЛЕН ")],-1)));function ge(t,e,o,r,c,n){const i=(0,s.g2)("BackIcon"),a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",de,[(0,s.bF)(a,{to:"/home"},{default:(0,s.k6)((()=>[(0,s.bF)(i,{class:"back-icon"})])),_:1}),ue,(0,s.bF)(a,{to:"/"},{default:(0,s.k6)((()=>[le])),_:1})]),pe],64)}var ke={name:"BasketPage",components:{BackIcon:_t},computed:{...(0,f.L8)(["getBasketProducts","getAllPriceProductsInBasket"]),basketProducts(){return this.getBasketProducts},allPriceProductsInBasket(){return this.getAllPriceProductsInBasket}},methods:{removeFromBasket(t){this.$store.dispatch("removeProductFromBasket",t)}},created(){const t=JSON.parse(localStorage.getItem("vuex-state"));t&&this.$store.replaceState(t)},props:{}};const he=(0,n.A)(ke,[["render",ge],["__scopeId","data-v-a787be1c"]]);var me=he;const ve=[{path:"/",name:"authorization",component:Jt},{path:"/home",name:"home",component:it},{path:"/product/:id",name:"ProductPage",component:ie},{path:"/shopping",name:"BasketPage",component:yt},{path:"/decoration",name:"DecorationPage",component:me}],Pe=(0,u.aE)({history:(0,u.LA)("/restaurant/"),routes:ve});var be=Pe;const fe=t=>{try{const e=JSON.stringify(t);localStorage.setItem("vuex-state",e)}catch(e){console.error("Could not save state",e)}},Be=()=>{try{const t=localStorage.getItem("vuex-state");if(null===t)return;return JSON.parse(t)}catch(t){return void console.error("Could not load state",t)}};var Ce=(0,f.y$)({state:Be()||{countProductsInBasket:0,allPriceProductsInBasket:0,products:[{id:1,img:"1.png",title:"Устрицы по рокфеллеровски",subtitle:"Значимость этих проблем настолько очевидна...",price:2700},{id:2,img:"2.png",title:"Свиные ребрышки на гриле с зеленью",subtitle:"Не следует, однако забывать...",price:1600},{id:3,img:"4.png",title:"Креветки по-королевски в лимонном соке",subtitle:"Значимость этих проблем настолько очевидна...",price:1820},{id:4,img:"5.png",title:"Устрицы по рокфеллеровски",subtitle:"Значимость этих проблем настолько очевидна...",price:2700},{id:5,img:"2.png",title:"Свиные ребрышки на гриле с зеленью",subtitle:"Не следует, однако забывать...",price:1600},{id:6,img:"4.png",title:"Креветки по-королевски в лимонном соке",subtitle:"Значимость этих проблем настолько очевидна...",price:1820},{id:7,img:"2.png",title:"Свиные ребрышки на гриле с зеленью",subtitle:"Не следует, однако забывать...",price:1600},{id:8,img:"5.png",title:"Устрицы по рокфеллеровски",subtitle:"Значимость этих проблем настолько очевидна...",price:2700}],basketProducts:[]},getters:{getCountProductsInBasket:t=>t.countProductsInBasket,getAllPriceProductsInBasket:t=>t.allPriceProductsInBasket,getProducts:t=>t.products,getBasketProducts:t=>t.basketProducts},mutations:{incrementProductCount(t){t.countProductsInBasket++,fe(t)},addProductToBasket(t,e){const o=t.basketProducts.find((t=>t.id===e.id));o||(t.basketProducts.push(e),t.countProductsInBasket++,t.allPriceProductsInBasket+=e.price,fe(t))},removeProductFromBasket(t,e){const o=t.basketProducts.findIndex((t=>t.id===e));if(-1!==o){const e=t.basketProducts[o];t.basketProducts.splice(o,1),t.countProductsInBasket--,t.allPriceProductsInBasket-=e.price,fe(t)}},CLEAR_BASKET(t){t.basketProducts=[],t.countProductsInBasket=0,t.allPriceProductsInBasket=0,fe(t)}},actions:{addProductToBasket({commit:t},e){t("addProductToBasket",e)},removeProductFromBasket({commit:t},e){t("removeProductFromBasket",e)},clearBasket({commit:t}){t("CLEAR_BASKET")}},modules:{}});(0,r.Ef)(d).use(Ce).use(be).mount("#app")},935:function(t,e,o){"use strict";t.exports=o.p+"img/1.ae23a46f.png"},372:function(t,e,o){"use strict";t.exports=o.p+"img/2.3b603100.png"},314:function(t,e,o){"use strict";t.exports=o.p+"img/4.52f50453.png"},315:function(t,e,o){"use strict";t.exports=o.p+"img/5.ae23a46f.png"},964:function(t,e,o){"use strict";t.exports=o.p+"img/background.d7e123fe.png"},204:function(t,e,o){"use strict";t.exports=o.p+"img/background_product.5532dc44.png"}},e={};function o(r){var s=e[r];if(void 0!==s)return s.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,o),c.exports}o.m=t,function(){var t=[];o.O=function(e,r,s,c){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],c=t[u][2];for(var i=!0,a=0;a<r.length;a++)(!1&c||n>=c)&&Object.keys(o.O).every((function(t){return o.O[t](r[a])}))?r.splice(a--,1):(i=!1,c<n&&(n=c));if(i){t.splice(u--,1);var d=s();void 0!==d&&(e=d)}}return e}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[r,s,c]}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/restaurant/"}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,c,n=r[0],i=r[1],a=r[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(a)var u=a(o)}for(e&&e(r);d<n.length;d++)c=n[d],o.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return o.O(u)},r=self["webpackChunkrestaurant"]=self["webpackChunkrestaurant"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(843)}));r=o.O(r)})();
//# sourceMappingURL=app.2e05cb64.js.map