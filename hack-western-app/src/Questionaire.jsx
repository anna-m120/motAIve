import React from "react";
import "./questionaire.css"
import motaive from './motaive.png';
function Questionaire({hideQuestionaire}){

    React.useEffect(() => {
        Notification.requestPermission().then((permission) => {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                setTimeout(() => new Notification("Take a minute to reflect", {icon: "./motaive.png"}), 20000);
            }
          });
      }, []);
    const questions = [{q:"Enter your name", n: "Blue"}, {q:"I normally have enough energy to get through the day", n: "False"}, {q:"I feel like I get enough exercise", n: "False"}, {q:"I am happy with the connections I have with my coworkers", n: "True"}, {q:"I feel like I have a balanced diet", n: "False"}]
    return (<section >
        <div className="title-container">
        <svg width="408" height="117" viewBox="0 0 408 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.43324 87V37.9091H18.4091V46.5703H18.9844C20.0071 43.6939 21.7116 41.4247 24.098 39.7628C26.4844 38.1009 29.3395 37.2699 32.6634 37.2699C36.0298 37.2699 38.8956 38.1115 41.2607 39.7947C43.6257 41.4567 45.2024 43.7152 45.9908 46.5703H46.5021C47.5036 43.7578 49.3146 41.5099 51.9354 39.8267C54.5774 38.1222 57.6989 37.2699 61.2997 37.2699C65.8807 37.2699 69.5987 38.7294 72.4538 41.6484C75.3303 44.5462 76.7685 48.6584 76.7685 53.9851V87H63.1854V56.6697C63.1854 53.9425 62.4609 51.897 61.0121 50.5334C59.5632 49.1697 57.7521 48.4879 55.5788 48.4879C53.1072 48.4879 51.179 49.2763 49.794 50.853C48.4091 52.4084 47.7166 54.4645 47.7166 57.0213V87H34.517V56.3821C34.517 53.9744 33.8246 52.0568 32.4396 50.6293C31.076 49.2017 29.2756 48.4879 27.0384 48.4879C25.5256 48.4879 24.1619 48.8714 22.9474 49.6385C21.7543 50.3842 20.8061 51.4389 20.103 52.8026C19.3999 54.1449 19.0483 55.7216 19.0483 57.5327V87H5.43324ZM109.703 87.9588C104.739 87.9588 100.446 86.9041 96.8235 84.7947C93.2227 82.6641 90.4421 79.7024 88.4819 75.9098C86.5217 72.0959 85.5415 67.6747 85.5415 62.6463C85.5415 57.5753 86.5217 53.1435 88.4819 49.3509C90.4421 45.5369 93.2227 42.5753 96.8235 40.4659C100.446 38.3352 104.739 37.2699 109.703 37.2699C114.668 37.2699 118.951 38.3352 122.551 40.4659C126.174 42.5753 128.965 45.5369 130.925 49.3509C132.885 53.1435 133.865 57.5753 133.865 62.6463C133.865 67.6747 132.885 72.0959 130.925 75.9098C128.965 79.7024 126.174 82.6641 122.551 84.7947C118.951 86.9041 114.668 87.9588 109.703 87.9588ZM109.767 77.4119C112.026 77.4119 113.912 76.7727 115.424 75.4943C116.937 74.1946 118.077 72.4261 118.844 70.1889C119.632 67.9517 120.027 65.4055 120.027 62.5504C120.027 59.6953 119.632 57.1491 118.844 54.9119C118.077 52.6747 116.937 50.9062 115.424 49.6065C113.912 48.3068 112.026 47.657 109.767 47.657C107.488 47.657 105.57 48.3068 104.015 49.6065C102.48 50.9062 101.319 52.6747 100.531 54.9119C99.7639 57.1491 99.3803 59.6953 99.3803 62.5504C99.3803 65.4055 99.7639 67.9517 100.531 70.1889C101.319 72.4261 102.48 74.1946 104.015 75.4943C105.57 76.7727 107.488 77.4119 109.767 77.4119ZM168.83 37.9091V48.1364H139.267V37.9091H168.83ZM145.978 26.1477H159.593V71.9148C159.593 73.1719 159.785 74.152 160.169 74.8551C160.552 75.5369 161.085 76.0163 161.767 76.2933C162.47 76.5703 163.279 76.7088 164.196 76.7088C164.835 76.7088 165.474 76.6555 166.113 76.549C166.752 76.4212 167.243 76.3253 167.583 76.2614L169.725 86.3928C169.043 86.6058 168.084 86.8509 166.848 87.1278C165.613 87.4261 164.11 87.6072 162.342 87.6712C159.061 87.799 156.184 87.3622 153.713 86.3608C151.262 85.3594 149.355 83.804 147.992 81.6946C146.628 79.5852 145.957 76.9219 145.978 73.7045V26.1477ZM313.63 37.9091L296.467 87H281.126L263.964 37.9091H278.346L288.541 73.0334H289.053L299.216 37.9091H313.63ZM341.387 87.9588C336.338 87.9588 331.991 86.9361 328.348 84.8906C324.725 82.8239 321.934 79.9048 319.974 76.1335C318.014 72.3409 317.034 67.8558 317.034 62.6783C317.034 57.6286 318.014 53.1967 319.974 49.3828C321.934 45.5689 324.694 42.5966 328.252 40.4659C331.831 38.3352 336.029 37.2699 340.844 37.2699C344.083 37.2699 347.098 37.7919 349.889 38.8359C352.701 39.8587 355.152 41.4034 357.24 43.4702C359.349 45.5369 360.99 48.1364 362.162 51.2685C363.333 54.3793 363.919 58.0227 363.919 62.1989V65.9382H322.467V57.5007H351.103C351.103 55.5405 350.677 53.804 349.825 52.2912C348.973 50.7784 347.79 49.5959 346.277 48.7436C344.786 47.87 343.049 47.4332 341.068 47.4332C339.001 47.4332 337.169 47.9126 335.571 48.8714C333.994 49.8089 332.758 51.0767 331.863 52.6747C330.968 54.2514 330.51 56.0092 330.489 57.9482V65.9702C330.489 68.3991 330.936 70.4979 331.831 72.2663C332.748 74.0348 334.037 75.3984 335.699 76.3572C337.36 77.3161 339.331 77.7955 341.611 77.7955C343.124 77.7955 344.509 77.5824 345.766 77.1562C347.023 76.7301 348.099 76.0909 348.994 75.2386C349.889 74.3864 350.571 73.3423 351.039 72.1065L363.632 72.9375C362.993 75.9631 361.682 78.6051 359.701 80.8636C357.74 83.1009 355.205 84.848 352.094 86.1051C349.005 87.3409 345.436 87.9588 341.387 87.9588Z" fill="#D9D9D9"/>
            <path d="M191.697 87.9268C188.565 87.9268 185.774 87.3835 183.324 86.2969C180.874 85.1889 178.935 83.5589 177.507 81.407C176.101 79.2337 175.398 76.5277 175.398 73.2891C175.398 70.5618 175.898 68.2713 176.9 66.4176C177.901 64.5639 179.265 63.0724 180.991 61.9432C182.717 60.8139 184.677 59.9616 186.871 59.3864C189.087 58.8111 191.41 58.4062 193.839 58.1719C196.694 57.8736 198.995 57.5966 200.742 57.3409C202.489 57.0639 203.757 56.6591 204.545 56.1264C205.334 55.5937 205.728 54.8054 205.728 53.7614V53.5696C205.728 51.5455 205.089 49.9794 203.81 48.8714C202.553 47.7635 200.763 47.2095 198.441 47.2095C195.991 47.2095 194.041 47.7528 192.592 48.8395C191.143 49.9048 190.185 51.2472 189.716 52.8665L177.124 51.8438C177.763 48.8608 179.02 46.2827 180.895 44.1094C182.77 41.9148 185.188 40.2315 188.15 39.0597C191.133 37.8665 194.585 37.2699 198.505 37.2699C201.232 37.2699 203.842 37.5895 206.335 38.2287C208.849 38.8679 211.076 39.8587 213.015 41.201C214.975 42.5433 216.52 44.2692 217.649 46.3786C218.778 48.4666 219.343 50.9702 219.343 53.8892V87H206.431V80.1925H206.048C205.259 81.7266 204.205 83.0795 202.884 84.2514C201.562 85.402 199.975 86.3075 198.121 86.968C196.268 87.6072 194.126 87.9268 191.697 87.9268ZM195.597 78.5305C197.599 78.5305 199.368 78.1364 200.902 77.348C202.436 76.5384 203.64 75.4517 204.513 74.0881C205.387 72.7244 205.824 71.1797 205.824 69.4538V64.2443C205.398 64.5213 204.812 64.777 204.066 65.0114C203.342 65.2244 202.521 65.4268 201.605 65.6186C200.689 65.7891 199.773 65.9489 198.857 66.098C197.94 66.2259 197.109 66.343 196.364 66.4496C194.766 66.6839 193.37 67.0568 192.177 67.5682C190.984 68.0795 190.057 68.772 189.396 69.6456C188.736 70.4979 188.406 71.5632 188.406 72.8416C188.406 74.6953 189.077 76.1122 190.419 77.0923C191.783 78.0511 193.509 78.5305 195.597 78.5305Z" fill="#BD00AC"/>
            <rect x="236" y="36" width="14" height="51" fill="#BD00AC"/>
            <circle cx="242.5" cy="22.5" r="12.5" stroke="#BD00AC" stroke-width="10"/>
        </svg>
        </div>
        {questions.map((data, index) => <div key={"questionaire-question-"+index} className="q_label_wrapper"><label class="q_label">{data.q}:</label> <div><input value={data.n}/></div></div>)}
        <div style={{textAlign: "center"}}><button className="questionaire_button button-9" onClick={() =>{ 
            hideQuestionaire()
            }}>Submit my background</button></div>
    </section>)
}
export default Questionaire;