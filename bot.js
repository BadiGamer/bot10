const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "W";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Whelp || Winv`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "W";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

client.on('message', function(message) {
    if (message.content == "Wclear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});
	
  client.on('message', message => {
    if (message.content.startsWith("+link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 25,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
دد استخدامات الرابط : 25**`)

    }
});


client.on('message', message => {

    if (message.content === "Wmc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "Wumc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }



});

client.on('message', message => {
const prefix = "W";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492086928397565952").send({embed : banembed})
}
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**baneed from this server**`)

}
});

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on("message", message => {
    var prefix = "Ws";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('Wbc-users')){
if(!message.author.id === '461059496861630465') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on("message", msg => {
    var prefix = "W";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField("🌪  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("🆔  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField('🕵  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('🛰   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField('🎖  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField('🤖  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});

client.on("message", message => {
    if (message.content === "Wrules") {
           message.react("✅")
              message.react("❌")
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`

  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●

1) لا تنشر سيرفرات دسكورد بالعام او بالخاص..
2) لا تتكلم عن اشياء مشبوهة او اشياء مالها داعي
3) لا تلعب بالهاك وتدخل مع ناس يلعبون بهاك بماين كرافت
4) حاول انك ما تسب احد..
5) لا تكون عنصري ولا تتحرش بأحد بطريقة وصخة...
6) لا تضحك ع أشياء حساسة..
7) لا تتكلم عن السياسة ا شيء ديني او حساس
8) أحترم الأخرين وفكر باللي تقوله
9) لا تتحرش بالناس ولا تكون شخص متنمر
10) لا تنشر سيرفرات اخرى ماين كرافت
11) لا ترسل روابط مواقع او اي شيء اباحي 
12) لا تحرق ع ناس افلام او مقاطع الخ..
13) لا تناقش او تصنع نقاشات بين الآخريين
14) لا تشغل اغاني مزعجة ولا تخرب ع الآخريين
15) لا تنتحل شخصيات ناس ثانية..
16) لا تنشر دسكورد او اكاونتات مهكره او اي شيء ثاني
17) ممنوع السبام

●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
  
    `)
   
      message.author.sendEmbed(embed)
      
      }
      }); 

client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});


 client.on('message', message => {
  var prefix = "W";
 if (message.content.startsWith(prefix + 'help')) {
     let pages = [
 	`=-=-=-=-=-=** 🌍 Public Commands - اوامر عامة 🌍 **=-=-=-=-=-=
**     ❖ +id ======> To Show Your ID | ايدي حسابك
     ❖ +ping ====> Ping Of Bot | بنج حك البوت
     ❖ +info =====> Information Of The Bot | معلومات البوت
     ❖ +server ==> Information Of The Server | معلومات السيرفر
     ❖ +cal =====> To Calculate | اله لحاسبة 
     ❖ +rooms ===> Show Rooms Of Server | اضهار الرومات الي في السيرفر
     ❖ +roles ===> Show Roles Of The Server | اضهار الرانكات
     ❖ +emojis ==> Emoji Of Server | ايموجيات السيرفر   
     ❖ +say =====> The Bot Say Any Thing | تكرار اي شي كتبتو
     ❖ +ser-av ===> To Show Image Of Server | لاضهار صورة السيرف 
     ❖ +embed ===> To Embed | لتكرار اي شي كتبتو بطريقة حلوة
     ❖ +avatar ==> Your Avatar |صورتك الشخصية
**
     ===========================================================
       React With ▶ To See Admins Commands`,
 	`=-=-=-=-=-= **🔧  Admin Commands - اوامر ادارية 🔧** =-=-=-=-=-=
     **❖ +move @user => Move User To Your Room Voice | لسحب الشخص الى روومك
     ❖ +mvall => Move All To Your Room Voice | لسحب الجميع الي روومك
     ❖ +bc => Broadcast | رسالة جماعية الى كل اعضاء السيرفر
     ❖ +role @user <rank> => Give User Rank | لأعطاء رتبة لعضو معين
     ❖ +roleremove @user <rank> => remove Rank From User | لازالة الرتبة من شخص معين
     ❖ +role all <rank> => Give All Rank | لأعطاء رتبة للجميع
     ❖ +role humans <rank> => Give Humans Rank | لأعطاء رتبة للاشخاص فقط
     ❖ +role bots <rank> => Give Bots Rank | لأعطاء رتبة لجميع البوتات
     ❖ +clear => Clear Chat | مسح الشات
     ❖ +mute @user <reason> => Mute User | اعطاء العضو ميوت لازم رتبة <Muted>
     ❖ +unmute @user => Unmute User | لفك الميوت عن الشخص 
     ❖ +kick @user <reason> => Kick User From Server | طرد الشخص من السيرفر
     ❖ +ban @user <reason> => Ban User From Server | حضر الشخص من السيرفر
     ❖ +mct => Mute Channel | تقفيل الشات
     ❖ +unmct => Unmute Channel | فتح الشات
     ❖ +kv @user => Voice Kick | يطرد شخص من الرووم
     ❖ +vonline => Create Channel Voice Online | يسوي رووم فويس اونلاين
     ❖ +bans  ==> ban list | الاشخاص الي تبندو
     ** 
     ===========================================================
       React With ▶ To See Games Commands`,
 	`=-=-=-=-=-= **  Games Commands - اوامر الالعاب  ** =-=-=-=-=-=
**   ❖ +xo @user => Game XO | لعب اكس او
     ❖ +rps => Rock & Paper & Scissors | لعبة حجر ورقة مقص
     ❖ +slots => Game Of Fruits | لعبة الفواكه
     ❖ +زواج @user => لعبة الزواج
     ❖ +speed => لعبة سرعة كتابة 
     ❖ +لعبة فكك <= فكك
     ❖ +لعبة عواصم <= عواصم
     ❖ +البوت يعطيك نصائح <= هل تعلم
     ❖ +skin => Ur Mc Skin
     ❖ +لو خيروك => Funny Game Yay
**
      ===========================================================
	  React With ▶ To See Music Commands`,
	`=-=-=-=-=-=  ** :musical_note: Music Commands  -  اوامر الاغاني :musical_note:**  =-=-=-=-=-=
**	 ❖ +p => For Start Music | لتشغيل الاغاني
	 ❖ +s => For Skip Music | لتخطي الاغنية
	 ❖ +stop => For Stop Music | لأيقاف الاغنية
     ❖ +vol => For Reduce or Raise The Sound | لخفض او رفع الصوت
     ❖ +np => For See Name Music | لكي ترى اسم الاغنية
     ❖ +q => To See The Music In The Queue | لكي ترا الاغاني التي في قائمة الانتظار
     ❖ +pa => For Pause The Music | لأيقاف الاغنية مؤقتنا
     ❖ +r => For Play Back The Music agin after its end | لأعادة تشغيل الاغنية بعد توقفها
**
	 ===========================================================
       React With ▶ To See Quran Commands`,
	`=-=-=-=-=-= ** :kaaba: Quran Commands  -  اوامر القرأن :kaaba:**  =-=-=-=-=-=
   **  ❖+قران => For Start Quran | لتشغيل القرأن
	 ❖:regional_indicator_a: القرآن كاملاً ماهر المعيقلي
     ❖:regional_indicator_b: سورة البقرة كاملة للشيخ مشاري العفاسي
     ❖:regional_indicator_c: سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
     ❖:stop_button: لإيقاف القرآن الكريم
     ❖:regional_indicator_d: القرآن كاملاً عبدالباسط عبدالصمد
     ❖:regional_indicator_e: القرآن كاملاً ياسر الدوسري
     ❖:regional_indicator_f: سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي
 	    DgPro**`]
 	let page = 1;
 
     let embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setFooter(`Page ${page} of ${pages.length}`)
     .setDescription(pages[page-1])
 
     message.channel.sendEmbed(embed).then(msg => {
 
         msg.react('◀').then( r => {
             msg.react('▶')
 
 
         const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
         const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
         const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
         const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
 
 
 
         backwards.on('collect', r => {
             if (page === 1) return;
             page--;
             embed.setDescription(pages[page-1]);
             embed.setFooter(`Page ${page} of ${pages.length}`);
             msg.edit(embed)
         })
         forwards.on('collect', r => {
             if (page === pages.length) return;
             page++;
             embed.setDescription(pages[page-1]);
             embed.setFooter(`Page ${page} of ${pages.length}`);
             msg.edit(embed)
         })
         })
     })
     }
 });


client.on('message', message => {
if(message.content.startsWith("Wslots")) {
let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slot2 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slot3 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1 === slots2 && slots2 === slots3) {
we = "Win, GG."
} else {
we = "Lose :'("
}
message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("Wnew")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("Wclose")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`+close\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'Wclose', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    
                   .then((collected) => {
                       message.channel.delete();
                   })    
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "sugg")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("515037514810261514").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })

client.on('message', message => {
        if (message.content === "Winv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`『| ${message.author.username} |』`, message.author.avatarURL)      
        .setTitle(`اضغط هنا لدعوه البوت`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=513589898381361167&permissions=0&scope=bot`)
     message.channel.sendEmbed(embed);
       }
   });

client.on('message', Sal => { // By : !!!,RaaXe ? ,??
  if(Sal.content === 'Wbot-info') { //هنا تغير البرفيكس
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .addField('اسم البوت', client.user.username, true)
  .setFooter(client.user.tag, client.user.avatarURL, true)
  .addField('تاق البوت', client.user.discriminator, true)
  .addField('ايدي البوت', client.user.id, true)
.addField('     ** ? bot_owner ?  ** ' ,' **  ! -|BD ,ana pro#3996 ** ')
  Sal.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith("Wavatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
      if(message.content.startsWith ("Wmarry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});

client.on('message', message => {
var prefix = "W"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });








client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","🔺Member🔻"));
    });




const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "invited-by");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});

client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
 
client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = 'W' //بريفكس البوت
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});







 client.on('message', msg => {//msg
    if (msg.content === `${prefix}colors`) {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/501774006966419458/501774646467887105/colors.png"})
    }
  });;
 
  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == `${prefix}color`){
    const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
   
    if(!isNaN(args) && args.length > 0)
   
   
    if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
   
   
    var a = message.guild.roles.find("name",`${args}`)
     if(!a)return;
    const embed = new Discord.RichEmbed()
   
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
   
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
    if (!args)return;
    setInterval(function(){})
       let count = 0;
       let ecount = 0;
    for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
   
    }
     message.member.addRole(message.guild.roles.find("name",`${args}`));
   
   
    }
    });
 
   
client.on('message', message => {
  if(message.content === prefix + 'createcolors') {
                       if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
    message.guild.createRole({
                name: "1",
                  color: "#FFB6C1",
                  permissions: []
   })
         message.guild.createRole({
                name: "2",
                  color: "#FFC0CB",
                  permissions: []
   })
              message.guild.createRole({
                name: "3",
                  color: "#FF69B4",
                  permissions: []
   })
                   message.guild.createRole({
                name: "4",
                  color: "#FF1493",
                  permissions: []
   })
                   message.guild.createRole({
                name: "5",
                  color: "#DB7093",
                  permissions: []
   })
                   message.guild.createRole({
                name: "6",
                  color: "#C71585",
                  permissions: []
   })
                   message.guild.createRole({
                name: "7",
                  color: "#E6E6FA",
                  permissions: []
   })
                   message.guild.createRole({
                name: "8",
                  color: "#D8BFD8",
                  permissions: []
   })
                   message.guild.createRole({
                name: "8",
                  color: "#DDA0DD",
                  permissions: []
   })
                   message.guild.createRole({
                name: "9",
                  color: "#DA70D6",
                  permissions: []
   })
                   message.guild.createRole({
                name: "10",
                  color: "#EE82EE",
                  permissions: []
   })
                   message.guild.createRole({
                name: "11",
                  color: "#FF00FF",
                  permissions: []
   })
                   message.guild.createRole({
                name: "12",
                  color: "#BA55D3",
                  permissions: []
   })
                   message.guild.createRole({
                name: "13",
                  color: "#9932CC",
                  permissions: []
   })
                        message.guild.createRole({
                name: "14",
                  color: "#9400D3",
                  permissions: []
   })
                        message.guild.createRole({
                name: "15",
                  color: "#8A2BE2",
                  permissions: []
   })
                             message.guild.createRole({
                name: "16",
                  color: "#8B008B",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "17",
                  color: "#800080",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "18",
                  color: "#9370DB",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "19",
                  color: "#7B68EE",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "20",
                  color: "#6A5ACD",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "21",
                  color: "#483D8B",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "22",
                  color: "#663399",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "23",
                  color: "#4B0082",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "24",
                  color: "#FFA07A",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "25",
                  color: "#FA8072",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "26",
                  color: "#E9967A",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "27",
                  color: "#F08080",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "28",
                  color: "#CD5C5C",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "29",
                  color: "#DC143C",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "30",
                  color: "  #FF0000",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "31",
                  color: "#B22222",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "32",
                  color: "#8B0000",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "33",
                  color: "#FFA500",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "34",
                  color: "#FF8C00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "35",
                  color: "#FF7F50",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "36",
                  color: "#FF6347",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "37",
                  color: "#FF4500",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "38",
                  color: "#FFD700",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "39",
                  color: "#FFFFE0",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "40",
                  color: "#FFFACD",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "41",
                  color: "#FAFAD2",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "42",
                  color: "  #FFEFD5",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "43",
                  color: "#FFE4B5",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "44",
                  color: "#FFDAB9",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "45",
                  color: "#EEE8AA",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "46",
                  color: "#F0E68C",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "47",
                  color: "#BDB76B",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "48",
                  color: "#ADFF2F",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "49",
                  color: "#7FFF00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "50",
                  color: "#7CFC00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "51",
                  color: "#00FF00",
                  permissions: []
   })  
   
                                       message.guild.createRole({
                name: "52",
                  color: "#32CD32",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "53",
                  color: "#98FB98",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "54",
                  color: "#90EE90",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "55",
                  color: "#00FA9A",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "56",
                  color: "#00FF7F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "57",
                  color: "#3CB371",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "58",
                  color: "#2E8B57",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "59",
                  color: "#2E8B57",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "60",
                  color: "#008000",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "61",
                  color: "#006400",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "62",
                  color: "#9ACD32",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "63",
                  color: "#6B8E23",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "64",
                  color: "#556B2F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "65",
                  color: "#66CDAA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "66",
                  color: "#8FBC8F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "67",
                  color: "#20B2AA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "68",
                  color: "#008B8B",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "69",
                  color: "#008080",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "70",
                  color: "#00FFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "71",
                  color: "#E0FFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "72",
                  color: "#AFEEEE",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "73",
                  color: "#7FFFD4",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "74",
                  color: "#40E0D0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "75",
                  color: "#48D1CC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "76",
                  color: "#00CED1",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "77",
                  color: "#5F9EA0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "78",
                  color: "#4682B4",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "79",
                  color: "#B0C4DE",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "80",
                  color: "#ADD8E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "81",
                  color: "#B0E0E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "82",
                  color: "#87CEFA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "83",
                  color: "#87CEEB",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "84",
                  color: "#6495ED",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "85",
                  color: "#00BFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "86",
                  color: "#1E90FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "87",
                  color: "#4169E1",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "88",
                  color: "#0000FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "89",
                  color: "#0000CD",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "90",
                  color: "#00008B",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "91",
                  color: "#000080",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "92",
                  color: "#191970",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "93",
                  color: "#FFF8DC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "94",
                  color: "#FFEBCD",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "95",
                  color: "#FFE4C4",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "96",
                  color: "#FFDEAD",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "97",
                  color: "#F5DEB3",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "98",
                  color: "#DEB887",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "99",
                  color: "#D2B48C",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "100",
                  color: "#BC8F8F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "101",
                  color: "#F4A460",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "102",
                  color: "#DAA520",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "103",
                  color: "#B8860B",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "104",
                  color: "#CD853F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "105",
                  color: "#D2691E",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "106",
                  color: "#808000",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "107",
                  color: "#8B4513",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "108",
                  color: "#A0522D",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "109",
                  color: "#A52A2A",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "110",
                  color: "#800000",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "111",
                  color: "#FFFFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "112",
                  color: "#FFFAFA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "113",
                  color: "#F0FFF0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "114",
                  color: "#F5FFFA",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "115",
                  color: "#F0FFFF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "116",
                  color: "#F0F8FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "117",
                  color: "#F8F8FF",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "118",
                  color: "#F5F5F5",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "119",
                  color: "#FFF5EE",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "120",
                  color: "#F5F5DC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "121",
                  color: "#FDF5E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "122",
                  color: "#FFFAF0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "123",
                  color: "#FFFFF0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "124",
                  color: "#FAEBD7",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "125",
                  color: "#FAF0E6",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "126",
                  color: "#FFF0F5",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "127",
                  color: "#FFE4E1",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "128",
                  color: "#DCDCDC",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "129",
                  color: "#D3D3D3",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "130",
                  color: "#C0C0C0",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "131",
                  color: "#f7f7f7",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "132",
                  color: "#b2b2b2",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "133",
                  color: "#6f6c6c",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "134",
                  color: "#4d4646",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "135",
                  color: "#4c4c4c",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "136",
                  color: "#2F4F4F",
                  permissions: []
   })    
                                       message.guild.createRole({
                name: "137",
                  color: "#040000",
                  permissions: []
   })    
 
   
        message.channel.sendMessage({embed: new Discord.RichEmbed()
   .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
  }
 
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '1');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '2');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '3');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '4');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '5');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '6');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '7');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '8');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '9');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '10');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '11');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '12');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '13');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '14');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '15');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '16');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '17');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '18');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '19');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '20');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("+!deletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '21');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '22');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '23');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '24');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '25');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '26');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '27');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '28');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '29');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '30');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '31');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '32');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '33');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '34');
 
  role.delete()
  }
 
});
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '35');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '36');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '37');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '38');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '39');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '40');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '41');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '42');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '43');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '44');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '45');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '46');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '47');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '48');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '49');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '50');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '51');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '52');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '53');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '54');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '55');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '56');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '57');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '58');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '59');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '60');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '-61');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '62');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '63');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '64');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '65');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '66');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '67');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '68');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '69');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '70');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '71');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '72');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '73');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '74');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '75');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '76');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '77');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '78');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '79');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '80');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '81');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '82');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '83');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '84');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '85');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '86');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '87');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '88');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '89');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '90');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '91');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '92');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '93');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '94');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '95');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '96');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith (`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '97');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '98');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '99');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '100');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '101');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '102');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '103');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '104');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '105');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith (`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '106');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '107');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '108');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '109');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '110');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '111');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '112');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '113');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '114');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '115');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '116');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '117');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '118');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '119');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '121');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '122');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("!deletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '123');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '124');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '125');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '126');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '127');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '128');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '129');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '130');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '131');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '132');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '133');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '134');
 
  role.delete()
  }
 
});
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '135');
 
  role.delete()
  }
 
});
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '136');
 
  role.delete()
  }
 
});
 
 
 
client.on('message', async message => {
 
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith(`${prefix}deletecolors`)) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '137');
 
  role.delete()
  }
 
});
})






























client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
