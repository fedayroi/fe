
let messages = require('./messages');

var tab_DaiLy = require('../Models/DaiLy');
let TelegramDaiLyBalance = require('../Models/TelegramDaiLyBalance');
let Phone    = require('../Models/Phone');
let helpers  = require('../Helpers/Helpers');
var UserInfo  = require('../Models/UserInfo');

module.exports = function(redT) {
	redT.telegram.on('message', (msg) => {
		messages(redT, msg);
	});
	/*
	redT.telegram_daily.on('message',(msg)=>{
		
        console.log(msg);

        if(msg.hasOwnProperty('contact')){
            console.log("111111")
            let id = msg.from.id;
            console.log("id:"+id);
            let contact = msg.contact.phone_number;

            console.log("contact:"+contact);
            let phoneCrack;
            try{
                phoneCrack = helpers.phoneCrack(contact);
                console.log("phoneCrack"+phoneCrack)
            }catch (e) {
                console.log(e.toString());
            }

            Phone.findOne({'phone':phoneCrack.phone}, {}, function(err, check){
                console.log(check)
                if(check){
                    if (phoneCrack) {
                        console.log("uid:"+check.uid);
                        UserInfo.findOne({'id':check.uid}, {}, function(err, data){
                            console.log(data)
                            if(data){
                                tab_DaiLy.findOne({nickname:data.name},function (err,data) {
                                    console.log(data)
                                    if(data){
                                        TelegramDaiLyBalance.findOne({'phone':phoneCrack.phone}, 'uid region phone', function(err, check1){
                                            if (!check1) {
                                                try {
                                                    
                                                    TelegramDaiLyBalance.create({'form':id, 'phone':phoneCrack.phone}, function(err, cP){
                                                        phoneCrack = null;

                                                        if (!!cP) {
                                                            console.log('id:'+id);
                                                            redT.telegram_daily.sendMessage(id,
                                                                'B???n nh???n ???????c th??ng b??o khi c??o ai chuy???n ti???n.',
                                                                {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}
                                                                });
                                                        }else{
                                                            redT.telegram_daily.sendMessage(id, '_Thao t??c th???t b???i_', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
                                                        }
                                                    });
                                                } catch (error) {
                                                    redT.telegram_daily.sendMessage(id, '_Thao t??c th???t b???i_', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
                                                }
                                            }
                                        });
                                    }else{
                                        redT.telegram_daily.sendMessage(id, 'Kh??ng ph???i t??i kho???n ?????i l??!', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
                                    }
                                })
                            }
                        });
                    }
                }else{
                    redT.telegram_daily.sendMessage(id, 'S??? ??i???n tho???i kh??ng t???n t???i h??? th???ng!', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
                }
            });
        }else{
			
			console.log("ID:"+msg.from.id);
			
            TelegramDaiLyBalance.findOne({'form':msg.from.id}, 'phone', function(err, data){
                if (data) {
                    let opts = {
                        parse_mode: 'markdown',
                        reply_markup: {
                            remove_keyboard: true,
                        }
                    };
                    redT.telegram_daily.sendMessage(msg.from.id, '*H?????NG D???N*' + 'H??? th???ng b??o chuy???n ti???n cho ?????i l??', opts);
                }else{
                    let opts = {
                        parse_mode: 'markdown',
                        reply_markup: {
                            keyboard: [
                                [{text: 'CHIA S??? S??? ??I???N THO???I', request_contact: true}],
                            ],
                            resize_keyboard: true,
                        }
                    };
                    redT.telegram_daily.sendMessage(msg.from.id, '*VH88.XYZ*  ????y l?? l???n ?????u ti??n b???n s??? d???ng App DaiLy. Vui l??ng ???n CHIA S??? S??? ??I???N THO???I ????? _X??C TH???C_', opts);
                }
            });
        }
    });*/
}
