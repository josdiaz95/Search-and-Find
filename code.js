
$(setupPage);

function setupPage() {

    $("area#santa").on("click", function () {
        foundIt( "Stuck Santa!")
    });

    $("area#reindeer").on("click", function () {
        foundIt("The sleeping reindeer!")
    });

    $("area#bird").on("click", function () {
        foundIt(`The caged Bird!`)
    });

    $("area#elf").on("click", function () {
        foundIt(`The pointing elf!`)
    });

    $("#dog").on("click", function () {
        foundIt("The sledding dog!")
    });

    function foundIt(description) {
        $("p#found").append(description + '<br/>' );
    }
}


