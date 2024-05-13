import database_telegram from '../module/database_telegram.js';
import path from 'path';
import fs from 'fs-extra';


export default async (client, Markup) => {



    client.action("roqia", async (ctx) => {

        try {

            const __dirname = path.resolve();

            await database_telegram({
                id: ctx?.chat?.id,
                username: ctx?.chat?.username,
                name: ctx?.chat?.first_name ? ctx?.chat?.first_name : ctx?.chat?.last_name ? ctx?.chat?.last_name : ctx?.chat?.title,
                type: ctx?.chat?.type,
                message_id: ctx?.message?.message_id
            }, client);
            const photo = fs.readJsonSync(path.join(__dirname, './files/json/roqia.json'));
            const random_photo = photo[Math.floor(Math.random() * photo.length)];
            const audio = ["https://post.walid-fekry.com/audios/roqia/1.mp3", "https://post.walid-fekry.com/audios/roqia/2.mp3", "https://post.walid-fekry.com/audios/roqia/3.mp3", "https://post.walid-fekry.com/audios/roqia/4.mp3", "https://post.walid-fekry.com/audios/roqia/5.mp3", "https://post.walid-fekry.com/audios/roqia/6.mp3"];
            const but_1 = [Markup.button.callback('🔄', 'roqia')];
            const but_2 = [Markup.button.callback('صوت 🔊', 'roqia_audio'), Markup.button.callback('نص 📝', 'roqia_text')];
            const but_4 = [Markup.button.callback('الرجوع للقائمة الرئيسية 🏠', 'start')];
            const button = Markup.inlineKeyboard([but_1, but_2, but_4]);
            const button_2 = Markup.inlineKeyboard([but_4]);

            await ctx.replyWithPhoto({ url: random_photo }, {
                reply_markup: button.reply_markup,
                parse_mode: 'HTML'
            });

            client.action('roqia_text', async (ctx) => {
                let message = `<b>الحمد لله والصلاة والسلام على رسول الله وعلى آله وصحبه وبعد:</b>\n\n`;
                message += "فالرقية الشرعية هي ما اجتمع فيها ثلاثة أمور : \n";
                message += "1 - أن تكون بكلام الله أو بأسمائه وصفاته أو المأثور عن النبي صلى الله عليه وسلم .\n";
                message += "2 - ذكر شيخ الإسلام ابن تيمية شرطاً وهو أن تكون باللسان العربي وما يعرف معناه : فكل اسم مجهول فليس لأحد أن يرقي به فضلاً عن أن يدعو به ولو عرف معناه لأنه يكره الدعاء بغير العربية ، وإنما يرخص لمن لا يحسن العربية ، فأما جعل الألفاظ الأعجمية شعاراً فليس من دين الإسلام .\n";
                message += "3 -أن يعتقد أن الرقية لا تؤثر بذاتها بل بتقدير الله تعالى .\n \n";
                message += `فإذا كانت هذه الشروط الثلاثة مجتمعة في الرقية فهي الرقية الشرعية ، وقد قال صلى الله عليه وسلم : " لا بأس بالرقى ما لم تكن شركاً ". رواه مسلم .
                وإن أنفع الرقية وأكثرها تأثيراً رقية الإنسان نفسه ، وذلك لما ورد في النصوص على عكس ما اشتهر عند كثير من الناس من البحث عن قارئ ولو كان عامياً أو مشعوذاً .
                وسورة الفاتحة من أنفع ما يقرأ على المريض ، وذلك لما تضمنته هذه السورة العظيمة من إخلاص العبودية لله والثناء عليه عزوجل وتفويض الأمر كله إليه والاستعانة به والتوكل عليه وسؤاله مجامع النعم ، ولما ورد فيها من النصوص مثل رقية اللديغ الواردة في صحيح البخاري.
                -عند رقية المريض يقول: " بسم الله أرقيك من كل شيء يؤذيك، ومن شر كل نفس أو عين حاسد الله يشفيك، بسم الله أرقيك ". رواه مسلم .
                وإذا اشتكى ألماً في جسده يضع يده على موضع الألم ويقول : " بسم الله (ثلاثاً) ويقول: (سبع مرات) : أعوذ بعزة الله وقدرته من شر ما أجد وأحاذر ". رواه مسلم . والرقية الشرعية تنفع من العين والسحر والمس وكذا الأمراض العضوية.
                وقد تكون الإصابة من العين ، فقد قال صلى الله عليه وسلم : " العين حق ولو كان شيء سابق القدر لسبقته العين ". رواه مسلم . وعن عائشة رضي الله عنها قالت : "أمرني النبي صلى الله عليه وسلم أو أمر النبي صلى الله عليه وسلم أن نسترقي من العين" . رواه البخاري.
                وقد رأى النبي صلى الله عليه وسلم في بيت أم سلمة جارية في وجهها سفعة فقال: " استرقوا لها فإن بها النظرة ". رواه البخاري.
                وإذا عرف العائن فيؤمر بأن يفعل ما أمر به النبي صلى الله عليه وسلم ، وذلك أن عامر بن ربيعة رأى سهل بن حنيف يغتسل فقال : والله ما رأيت كاليوم ولا جلد مخبأة : قال : فلبط سهل ، فأتى رسول الله صلى الله عليه وسلم عامراً فتغيظ عليه وقال: علام يقتل أحدكم أخاه؟ ألا بركت . اغتسل له " فغسل عامر وجهه ويديه ومرفقيه وركبتيه وأطراف رجليه وداخلة إزاره في قدح ثم صب عليه فراح سهل مع الناس". رواه مالك .
                ومما يقي من شر العين المحافظة على الأذكار الصباحية والمسائية وأن يتوكل على الله تعالى.
                \n \n`;
                message += "هذا ومن أنفع ما يقي من السحر بل ومن كل شر : المحافظة على أذكار الصباح والمساء وقراءة آية الكرسي وسورة الإخلاص والمعوذتين عقب كل صلاة وعند النوم وقراءة الآيتين من آخر سورة البقرة كل ليلة . \n";
                message += "والله أعلم ."
                await ctx.reply(message, { parse_mode: 'HTML', reply_markup: button_2.reply_markup, });
            });
            
            client.action('roqia_audio', async (ctx) => {
                const random_audio = audio[Math.floor(Math.random() * audio.length)];
                const name = "الرقية الشرعية";
                await ctx.replyWithAudio({ url: random_audio, filename: name }, {
                    reply_markup: button_2.reply_markup,
                    parse_mode: 'HTML',
                    caption: `<b>الرقية الشرعية الشاملة 🔊</b>`,
                });
            });

            await ctx.reply("◃─────•●•─────▹");


        } catch (error) {
            console.error(error);
        }
    });

}