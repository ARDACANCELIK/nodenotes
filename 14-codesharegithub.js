//node modules olmadan packagejson u git huba yüklemek önemli
//bunu push yapacaz githuba. (15 nolu dosya git ignore burada çalışmak için node modules u da yaptık .)

//git ignore dosyası yaratıp onun içine  /node_modules  diyorsun    bu dosyayı ignore et diyoruz yani
//sonra githuba gidip bir repo yaratıyoruz ismini yazıp  existing repo kodunu aşağıda olan kopyalıyoruz sonra geliyoruz vscodea terminale

//git init
// git add .
// git commit -m "first commit"

// yazıyoruz ve kopyaladığımız bu satırları vscode terminale yapıştır

// git remote add origin https://github.com/ARDACANCELIK/newrep.git
// git branch -M main
// git push -u origin main

// ___________________________________________________________________________
//şimdi ise  clone ile githubda yüklü repoyu indirme ve npmini yükleme. çünkü zaten package json var yüklenir. react dosyalarında sürekli npm install diyip smilganın dosyalarını yükleyip çalışıyorduk.

//bunu git repodan indirip npm modulunu yüklemek ise packagejson varsa çok kolay modules dosyasını yüklemene gerek bile yok

//clone  diyorsun githubda
// cd masasüstü   git clone    "sonra kopyaladığın url githubdan"(clonlamak istediğin repo urlsi)
// sonra text editörü aç  package json varsa  text editör içinde  "npm install" yaz vscode terminale  gerisi geliyor
