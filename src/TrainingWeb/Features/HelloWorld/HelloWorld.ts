/// <reference types="jquery" />

module TrainingWeb.HelloWorld {
    function Init(): void {
        $("#click-me").on("click", () => alert("Hello World!"));
    }

    $(() => {
        Init();
    });
}