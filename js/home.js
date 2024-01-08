

function homechange(key,pagekey){
    console.log("homechangeทำงาน");
    $('.homeside-icon a').removeClass('home-active');
    $('.'+key).addClass('home-active');
    changepage(pagekey)
}

function changepage(pagekey){
    $('.co').css('display','none');
    $('.ale').css('display','none');
    $('.user-info').css('display','none');
    $('.myorder').css('display','none');
    if(pagekey=='co'){
        $('.'+pagekey).css('display','grid');
    }else{
        $('.'+pagekey).css('display','block');
    }
    myorder()
    console.log("changepageทำงาน");
}

let order=[{
    id:1,
    img:'https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    name:'Cannon Pro we003-5820p 70M pixel',
    price:12000,
    count:5,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae animi, harum soluta illo dolore reiciendis id deserunt iure perferendis?',
    type:'other'
},{
    id:2,
    img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    name:'Headphone xxx 2.0 ultra',
    price:400000,
    count:3,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae animi, harum soluta illo dolore reiciendis id deserunt iure perferendis?',
    type:'Headphone'
},{
    id:3,
    img:'https://images.unsplash.com/photo-1583573636246-18cb2246697f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    name:'oppa pocco X14 032170 ROM 128 GB RAM 64GB',
    price:45699,
    count:1,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae animi, harum soluta illo dolore reiciendis id deserunt iure perferendis?',
    type:'Smartphone'
}]


function myorder(){
    let html=' ';
    for(let i=0;i<order.length;i++){
        html+=`<div class="myorder-item">
                    <div class="myorder-item-top">
                        <img src="${order[i].img}" alt="">
                        <div class="itemtop-desc">
                            <h2>${order[i].name}</h2>
                            <p>X${order[i].count}</p>
                        </div>
                        <div class="mod-price">
                            ${order[i].price} บาท
                        </div>
                    </div>
                    <div class="myorder-item-buttom">
                        <div class="mod-button">
                            <button>ให้คะแนน</button>
                            <button>ติดต่อผู้ขาย</button>
                            <button style="background: linear-gradient(125deg,green,yellowgreen);">ซื้ออีกครั้ง</button>
                            <p>รวม ${order[i].price*order[i].count} บาท</p>
                        </div>
                    </div>
                </div>`
    }
    $('.myorder').html(html);
}