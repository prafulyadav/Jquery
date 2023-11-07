$(document).ready(function () {
    console.log("we are using j query")

    $('p').click(function () {
        console.log("click kiya re baba")
        // $(this).hide()
    })

    // $('p').dblclick(function () {
    //     console.log("double click kiya re baba")
    //     // $(this).hide()
    // })

    // $('p').mouseenter(function () {
    //     console.log("you enter")
    //     // $(this).hide()
    // })

    // $('p').mouseup(function () {
    //     console.log("mouse up event")
    //     // $(this).hide()
    // })
    // $('p').hover(function () {
    //     console.log("hover")
    //     // $(this).hide()
    // },function(){
    //     console.log("thanks for comming")
    // })
    // ----------element selector-----

    // $('p').click(function(){
    //     console.log("element selector")
    //     $(this).hide()
    // })
    // --------------id selector------

    // $('#second').click(function(){
    //     console.log("you click id selector", this)
    //     $(this).hide();
    // })
    // $('#second').click()

    // $('.third').click()

    // $('#4').click(function () {
    //     $(this).hide()
    // })

    // $('p').on(
    //     {
    //         click: function(){
    //             console.log("thanks for clicking")
    //         },
    //         mouseleave:function(){
    //             console.log("mouse left")
    //         }
    //     }
    // )

    // $('#list').hide(1000,function(){
    //     console.log("hidden!!")
    // })

  

    // $('#list').show(1000,function(){
    //     console.log("dekh le bhai !!")
    // })

  // --------toggle

    // $('#magic').click(function () {
    //     $('#list').toggle(1000)
    //     console.log("magic toggle completed !!")
    // })
// // --------fade out
//     $('#magic').click(function () {
//         $('#list').fadeOut(5000)
//         console.log("magic fadeout completed !!")
//     })

// --------fade out
// $('#magic').click(function () {
//     $('#list').fadeToggle(2000)
//     console.log("magic fadeToggle completed !!")
// })


// ---------slideup and down

// $('#list').slideUp(1000,function(){
//         console.log("slide up !!")
//     })

//     $('#list').slideDown(1000,function(){
//         console.log("slide down !!")
//     })

    // $('mag').click(function(){
    //     $('#list').slideToggle(1000);
    // })

// -----------animate function in j query

$('#list').animate({
    opacity:0.3,
    height:'150px',
    width:'350px'
},1000)


})
function my(){
    alert("systumm hang");
}

