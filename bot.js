const Discord = require("discord.js");
const myid = ['287898437058560000']
const prefix = ['.'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ
client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7); 
client8.login(process.env.TOKEN8); 
client9.login(process.env.TOKEN9); 
client10.login(process.env.TOKEN10); 
client11.login(process.env.TOKEN11); 
client12.login(process.env.TOKEN12); 
client13.login(process.env.TOKEN13); 
client14.login(process.env.TOKEN14); 
client15.login(process.env.TOKEN15); 
client16.login(process.env.TOKEN16); 
client17.login(process.env.TOKEN17); 
client18.login(process.env.TOKEN18); 
client19.login(process.env.TOKEN19); 
client20.login(process.env.TOKEN20); 

client.login("NzI0OTA1NTAyNzA1ODQ0Mjc2.XwyK8A.kNcdHk1o_8FO4_frLEoqza9nmSU");
client2.login("NzMwODc5MzExOTA4ODMxMzQ0.XwyAWw.gtwHkDrNge_01MTIxfVNSyplMXA");
client3.login("NzI3NjMwNjA0MDQ4MjY5MzIy.XwyF1g.ci6QwdWodAw6jyOxOpAvnq0iVlE");
client4.login("NzI5NDIwMTc4NTIxMTk0NTc4.Xww6yw.b4WSnP2A5tMKYEg-7Vj6W1XGKH8");
client5.login("NzM0MDQ3NjcwMzg1MTE1MjE2.XxMBUQ.Ok-u7paey_l_IxCWgKXvhZmQqFY");
client6.login("NzM0MDMxMzY1OTU1MjU2MzIy.XxLx_A.9K5BlWCtQjkqwtnqTU2NcYHOBQ4");
client7.login("NzM0MDE2ODM2MTU2NTIyNTI2.XxLkdA.8UbuBtWnPVN3LLDPAO7HS37oJQw");

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
  if (message.content === prefix+'d1') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c1'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p1') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s1')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === prefix+'d2') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c2'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p2') {
message.channel.send('#profile')
  }
   if(message.content === prefix+'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s2')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === prefix+'d3') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c3'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p3') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s3')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === prefix+'d4') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c4'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p4') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s4')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === prefix+'d5') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c5'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p5') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s5')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === prefix+'d6') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c6'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p6') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s6')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


client7.on('message', message => {
  if (message.content === prefix+'d7') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c7'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p7') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r7'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s7')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client8.on('message', message => {
  if (message.content === prefix+'d8') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c8'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p8') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r8'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s8')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client9.on('message', message => {
  if (message.content === prefix+'d9') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c9'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p9') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r9'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s9')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client10.on('message', message => {
  if (message.content === prefix+'d10') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c10'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p10') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r10'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s10')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client11.on('message', message => {
  if (message.content === prefix+'d11') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c11'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p11') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r11'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s11')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client12.on('message', message => {
  if (message.content === prefix+'d12') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c12'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p12') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r12'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s12')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client13.on('message', message => {
  if (message.content === prefix+'d13') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c13'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p13') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r13'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s13')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client14.on('message', message => {
  if (message.content === prefix+'d14') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c14'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p14') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r14'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s14')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client15.on('message', message => {
  if (message.content === prefix+'d15') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c15'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p15') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r15'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s15')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client16.on('message', message => {
  if (message.content === prefix+'d16') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c16'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p16') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r16'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s16')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client17.on('message', message => {
  if (message.content === prefix+'d17') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c17'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p17') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r17'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s17')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client18.on('message', message => {
  if (message.content === prefix+'d18') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c18'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p18') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r18'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s18')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client19.on('message', message => {
  if (message.content === prefix+'d19') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c19'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p19') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r19'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s19')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client20.on('message', message => {
  if (message.content === prefix+'d20') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c20'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p20') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r20'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s20')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client2.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client3.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client4.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client5.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client6.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client7.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ




client8.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client9.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client10.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client11.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client12.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client13.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client14.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client15.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client16.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client17.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client18.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client19.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client20.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client2.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client3.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client4.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client5.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client6.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client7.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client8.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client9.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client10.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client11.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client12.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client13.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client14.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client15.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client16.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client17.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client18.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client19.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client20.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

client7.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``7`` ")
    }
});


client8.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``8`` ")
    }
});

client9.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``9`` ")
    }
});

client10.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``10`` ")
    }
});

client11.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``11`` ")
    }
});

client12.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``12`` ")
    }
});

client13.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``13`` ")
    }
});

client14.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``14`` ")
    }
});

client15.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``15`` ")
    }
});

client16.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``16`` ")
    }
});

client17.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``17`` ")
    }
});

client18.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``18`` ")
    }
});

client19.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``19`` ")
    }
});

client20.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``20`` ")
    }
});
