// function friendsQuery() {
//     // // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//     // $.ajax({
//     //     url: "/api/friends",
//     //     method: "GET"
//     // })
//     //     .then(function (friends) {
//     //         // Here we then log the tableData to console, where it will show up as an object.
//     //         console.log(friends);
//     //         console.log("------------------------------------");

//             $('.submit').on('click', function (event) {
//                 console.log("made it to on click");
//                 event.preventDefault();

//                 //now validate to ensure all needed questions are answered
//                 function validate() {
//                     var trueValid = true;
//                     $('.form-control').each(function () {
//                         if ($(this).val() === '') {
//                             trueValid = false;
//                         }
//                     });
//                     return trueValid;
//                 }
//                 if (validate() === true) {
//                     var newFriend = {
//                         name: $('#name').val().trim(),
//                         picture: $('#picture').val().trim(),
//                         scores: [
//                             Number($('#question-one').val().trim()),
//                             Number($('#question-two').val().trim()),
//                             Number($('#question-three').val().trim()),
//                             Number($('#question-four').val().trim()),
//                             Number($('#question-five').val().trim()),
//                             Number($('#question-six').val().trim()),
//                             Number($('#question-seven').val().trim()),
//                             Number($('#question-eight').val().trim()),
//                             Number($('#question-nine').val().trim()),
//                             Number($('#question-ten').val().trim())
//                         ]
//                     };
//                     console.log("new friend" + newFriend);

//                     //now create a post call to add in the new friend to the friendsArr 
//                     var URL = window.location.origin;
//                     $.post(URL + '/api/friends', newFriend,
//                         //this displays the match data to the modal
//                         function (data) {
//                             $('#matchName').text(data.name);
//                             $('#matchPic').attr('src', data.picture);
//                             $('#resultsModal').modal('toggle')
//                             console.log(data.name);
//                             $('#name').val('');
//                             $('#picture').val('');
//                             $('.chosen-select').val('');
//                         });
//                 } else alert('Missing Entry Please Review your Answers, and Complete all Fields.');
//             });
//     //     });
//     }

//     // friendsQuery();
