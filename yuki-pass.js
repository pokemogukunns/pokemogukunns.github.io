
        function getlevel() {
            const inputWord = document.getElementById('word').value;
            const currentUrl = window.location.href; // 現在のURLを取得
 
            if (inputWord === "pokemogukunns") {
                document.cookie = "yuki=True; path=/;";
                document.getElementById('info').textContent = "認証が成功しました。urlの'/pass/'の部分を'/home/'に変更するか、下のボタンから掲示板やYoutubeにアクセスしてください。";
 
                // 現在のURLの /word/ 部分を /bbs/ に置き換える
                const bbsUrl = currentUrl.replace('/pass/', '/bbs/');
                // URLの /word/ 部分を削除
                const videoUrl = currentUrl.replace('/pass/', '/'); 
                
                // 掲示板ボタンを作成
                const bbsButton = document.createElement('a');
                bbsButton.href = bbsUrl;
                bbsButton.textContent = "掲示板";
                bbsButton.style.display = "inline-block";
                bbsButton.style.marginTop = "10px";
                bbsButton.style.marginRight = "10px"; // ボタンの間に余白を追加
                bbsButton.style.padding = "10px";
                bbsButton.style.backgroundColor = "#666114";
                bbsButton.style.color = "white";
                bbsButton.style.textDecoration = "none";
                
                // Youtubeボタンを作成
                const videoButton = document.createElement('a'); // 変数名を修正
                videoButton.href = videoUrl; // URLの /word/ を削除したリンク
                videoButton.textContent = "Youtube";
                videoButton.style.display = "inline-block";
                videoButton.style.marginTop = "10px";
                videoButton.style.padding = "10px";
                videoButton.style.backgroundColor = "#3d7c99";
                videoButton.style.color = "white";
                videoButton.style.textDecoration = "none";
                
                // info の後にボタンを追加
                const infoDiv = document.getElementById('info');
                infoDiv.appendChild(document.createElement('br')); // 改行を追加
                infoDiv.appendChild(bbsButton);
                infoDiv.appendChild(videoButton); // videoButton を追加
            } else {
                document.getElementById('info').textContent = "パスワードが間違っています。もう一度試してください。";
            }
        }
