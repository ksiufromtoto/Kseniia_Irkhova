const {Dropbox} = require('dropbox');
const path = require('path');
const fs = require("fs");
const token = "sl.A-a0l2mQNgLFhiv7UhyYg0ZlE1jxNKdYqleLPxRIy2yCQzEKa4CpcsiWRtXyDxnZVSOSm27nOjosNVR6OJcLvioSH9d_9ME6k7yUpaEwdF_EzPRvo84xRwrF3dYL3djOd7j0YtD_";
const dbx = new Dropbox({
    accessToken: token
});

fs.readFile(path.join(__dirname, '/sponge.jpg'), (err, contents) => {
    if (err) {
        console.log('Error: ', err);
    }

    dbx.filesUpload({path: '/sponge.jpg', contents})
    .then((response) => {
        console.log("UPLOAD");
        console.log(response);
        if(response.status==200){
            dbx.filesGetMetadata({path: '/sponge.jpg'})
                .then((response)=>{
                    console.log("METADATA");
                    console.log(response);
                    if(response.status==200){
                        dbx.filesDeleteV2({path: '/sponge.jpg'})
                            .then((response)=>{
                                console.log("DELETE");
                                console.log(response);
                                if(response.status==200){
                                    console.log("TESTS PASSED");
                                }
                            })
                            .catch((uploadErr) => {
                                console.log(uploadErr);
                            });
                    }
                })
                .catch((uploadErr) => {
                console.log(uploadErr);
                });
        }
    })
    .catch((uploadErr) => {
        console.log(uploadErr);
    });
});


