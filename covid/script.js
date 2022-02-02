

function generate() {
    const url_string = window.location.href
    const url = new URL(url_string);
    const name = url.searchParams.get("name");
    const id = url.searchParams.get("id");
    const cuil = url.searchParams.get("cuil");

    document.querySelector('#name').innerHTML = name;
    document.querySelector('#cuil').innerHTML = cuil;

    var qrcode1 = new QRCode(document.querySelector("#qr-code1"), {
        text: 'https://vacunacioncovid19.cba.gov.ar/inmunizacion/2dCNxIy1FHPWNVfwZJKiQ=', //`https://rodriguez-rodrigo.github.io/covid/certified/certified.html?name=${name}&id=${id}`,
        width: 140, //default 128
        height: 140,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    var qrcode2 = new QRCode(document.querySelector("#qr-code2"), {
        text: 'https://vacunacioncovid19.cba.gov.ar/inmunizacion/2dCNxIy1FHPWNVfwZJKiQ=', //`https://rodriguez-rodrigo.github.io/covid/certified/certified.html?name=${name}&id=${id}`,
        width: 160, //default 128
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    console.log(qrcode);
}

generate();