function send() {
  let x = document.getElementById("lista");
  if (x.checkValidity()) {
    let y = document.getElementById("result");
    let list = [];
    let listA = [];
    for (var i = 0; i < x.length; i++) {
      if (x.elements[i].checked) {
        listA.push(x.elements[i].id);
        listA.push(x.elements[i].value);
        list.push(listA);
        listA = [];
      }
    }
    console.log(list);
    document.getElementById("menu").hidden = true;
    y.hidden = false;
    document.getElementById("pao").innerHTML = document.getElementById(
      list[0][0]
    ).alt;
    document.getElementById("carne").innerHTML = document.getElementById(
      list[1][0]
    ).alt;
    document.getElementById("salada").innerHTML = document.getElementById(
      list[2][0]
    ).alt;
    document.getElementById("queijo").innerHTML = document.getElementById(
      list[3][0]
    ).alt;
    document.getElementById("paoV").innerHTML = Number(
      list[0][1]
    ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    document.getElementById("carneV").innerHTML = Number(
      list[1][1]
    ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    document.getElementById("saladaV").innerHTML = Number(
      list[2][1]
    ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    document.getElementById("queijoV").innerHTML = Number(
      list[3][1]
    ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    let total =
      Number(list[0][1]) +
      Number(list[1][1]) +
      Number(list[2][1]) +
      Number(list[3][1]);
    document.getElementById("total").innerHTML = total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    document.getElementById("request").innerHTML = request;
    document.getElementById("request2").innerHTML = request;
  }
}