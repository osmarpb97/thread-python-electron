function get_libros() {
    var ps = require("python-shell")
    var path = require("path")
    const fs = require('fs');

    var options = {
        mode: 'text',
        scriptPath: path.join(__dirname, '../Core/'),
        pythonPath: '/usr/bin/python3.6',
    }
    ps.PythonShell.run('libros_threand.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
        fs.readFile('../Core/data.json', bar)
        function bar(err, data) {
            /* If an error exists, show it, otherwise show the file */
            data=JSON.parse((Buffer.from(data, 'binary').toString("utf8")));
            console.log("Los datos son",data);
            var el=document.getElementById("charts");
            for(let i in data){
                html=`       <div class="row">
                <div class="col s12 m12 l6">
                    <canvas id="myChartp`+i+`"></canvas>
                </div>
                <div class="col s10 m10 l6 ">
                    <canvas id="myChart`+i+`" width="1200" height="1200"></canvas>
                </div>
              </div>`;
                el.innerHTML +=html;}
            for(let i in data){
                var regalos=data[i].regalos;
                var apoyo=data[i].apoyo;
                var besos=data[i].besos;
                var cachondeo=data[i].cachondeo;
                var compania=data[i].compañia;
                var comunicacion=data[i].comunicación;
                var confianza=data[i].confianza;
                var delicioso=data[i].delicioso;
                var pasion=data[i].pasión;
                var sum=regalos+apoyo+besos+cachondeo+compania+comunicacion+confianza+delicioso+pasion;
                sum=sum/100
                var datapor=[regalos/sum,besos/sum,cachondeo/sum,compania/sum,delicioso/sum,confianza/sum,comunicacion/sum,pasion/sum,apoyo/sum]
                var ctxs = document.getElementById('myChart'+i).getContext('2d');
                var ctxsp = document.getElementById('myChartp'+i).getContext('2d');
                console.log("Canvas numerocenter-align",ctxs);
                var myChart = new Chart(ctxs, {
                    type: 'bar',
                    data: {
                        labels: ['Regalos','Besos','Cachondeo','Delicioso','Compania','Confianza','Comunicación','Pasión','Apoyo'],
                        datasets: [{
                            label: 'Numero de repeticiones',
                            data: [regalos, besos, cachondeo, delicioso, compania, confianza,comunicacion,pasion,apoyo],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(220, 102, 255, 0.2)',
                                'rgba(220, 99, 255, 0.2)',
                                'rgba(220, 200, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
                var myChartp = new Chart(ctxsp, {
                    type: 'pie',
                    data: {
                        labels: ['Regalos','Besos','Cachondeo','Delicioso','Compania','Confianza','Comunicación','Pasión','Apoyo'],
                        datasets: [{
                            label: 'Numero de repeticiones',
                            data: datapor,//[regalos, besos, cachondeo, delicioso, compania, confianza,comunicacion,pasion,apoyo],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(220, 102, 255, 0.2)',
                                'rgba(220, 99, 255, 0.2)',
                                'rgba(220, 200, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }
        };
    });
}