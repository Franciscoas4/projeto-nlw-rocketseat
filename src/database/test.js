const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-16.0249095",
        lng: "-48.095123",
        name: "Lar das crianças",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "61 105092345",
        images: [
            "https://www.pngfind.com/pngs/m/562-5622299_molduras-de-fotos-infantil-masculino-meninos-toda-atual.png",
            "https://www.seekpng.com/png/full/828-8280337_18-molduras-para-convites-e-fotos-de-festas.png"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    console.log(orphanage);

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
})