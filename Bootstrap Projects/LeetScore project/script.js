// import "style.css";
document.addEventListener("DOMContentLoaded", function(){
    const submitButton = document.getElementById("submit-button");
    const userInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container")
    const easyProgress = document.querySelector(".easy-level");
    const mediumProgress = document.querySelector(".medium-level");
    const hardProgress = document.querySelector(".hard-level");
    const easylabel = document.getElementById("easy-lbl");
    const mediumlabel = document.getElementById("medium-lbl");
    const hardlabel = document.getElementById("hard-lbl");
    const statsCards = document.querySelector(".stats-cards");
    // console.log(easyProgress.style.cssText);
    // let temp = easyProgress.style.getPropertyValue("--progress-degree");
    // console.log(temp + "hello");
    function validateUserName(userName){
        if(userName.trim() === ""){
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/; // regular expression to check the format of user name
        const isMatching = regex.test(userName);
        if(!isMatching){
            alert("invalid username.")
        }
        return isMatching
    }
    async function fetchUserDetails(userName){
        // const url = ""; use if api is available
        try{
            submitButton.textContent = "Searching...";
            submitButton.disabled = true;
            statsContainer.style.setProperty('display', 'none');
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${userName}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            // const response = await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch the user details");
            }
            const parsedData = await response.json();
            console.log("logging data : ", parsedData);

            displayUserData(parsedData);
        }
        catch(error){
            statsContainer.innerHTML = `<p>${error.message}</p>`;
        }
        finally{
            submitButton.textContent = "Search";
            submitButton.disabled = false;
        }
    }
    function updateProgress(solved, total, label, circle){
        const progressDeg = (solved/total)*100;
        // console.log(progressDeg + `${progressDeg}%`);
        circle.style.setProperty("--progress-degree", `${progressDeg}%`);
        // circle.style.cssText = `background : conic-gradient(rgb(59, 198, 59) ${progressDeg}%,
    // rgb(43, 53, 73) 0%)`;
        label.textContent = `${solved}/${total}`;
    }
    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;
        // console.log(totalEasyQues);
        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedEasyQues, totalEasyQues, easylabel, easyProgress);
        updateProgress(solvedMediumQues, totalMediumQues, mediumlabel, mediumProgress);
        updateProgress(solvedHardQues, totalHardQues, hardlabel, hardProgress);


        const cardsData =[
            {label : "Overall Submissions", value : parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
            {label : "Overall Easy Submissions", value : parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
            {label : "Overall Medium Submissions", value : parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
            {label : "Overall Hard Submissions", value : parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions},
        ];
        console.log(cardsData);

        statsCards.innerHTML = cardsData.map(
            data =>{
                `<div class = "card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                </div>`
            }
        ).join();
    }
    submitButton.addEventListener("click", function(){
        const userName = userInput.value;
        console.log("entered name is : ", userName);
        if(validateUserName(userName)){
            fetchUserDetails(userName);
        }
    });
});