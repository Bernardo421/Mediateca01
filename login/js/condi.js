
    const campoData = document.getElementById('data');

    function formatar(d) {
        return d.getFullYear() + '-' +
               String(d.getMonth() + 1).padStart(2, '0') + '-' +
               String(d.getDate()).padStart(2, '0');
    }

    const hoje = new Date();

    // Data máxima: hoje menos 5 anos (impede datas futuras e menores de 5 anos)
    campoData.max = formatar(new Date(hoje.getFullYear() - 5, hoje.getMonth(), hoje.getDate()));

    // Data mínima (opcional): impede datas absurdas, tipo ano 1800
    campoData.min = formatar(new Date(hoje.getFullYear() - 120, hoje.getMonth(), hoje.getDate()));

     
