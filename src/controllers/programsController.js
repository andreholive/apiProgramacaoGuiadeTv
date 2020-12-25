const axios = require('axios');
const moment = require('moment');

const url = 'https://programacao.netcombo.com.br/gatekeeper/exibicao/select';

function getChannelList(ids){
    let list = '';
    let revelsadded = [];
    ids.map(id => {
        if(id && revelsadded.indexOf(id)=='-1'){
            revelsadded.push(id);
            list +=`id_revel:1_${id}+`;
        }
    })
    return list;
}

function getTime(hour){
    //start 3 horas pra trás pois corre o risco de não buscar a programação atual;
    const start = moment().utc(true).subtract(3, 'hours').format();
    const end = moment().utc(true).add(hour, 'hours').format();
    return {start, end};
}

module.exports = {
    async getData(req, res){
        const {ids, hours} = req.body;
        let time;
        if(ids){
            const list = getChannelList(ids);
            if(hours && hours >= 1){
                time = getTime(hours);
            }
            else{
                time = getTime(5);
            }
            var query = `?q=${list}&wt=json&rows=100000&sort=id_canal%20asc,dh_inicio%20asc&fl=dh_fim%20dh_inicio%20titulo%20id_canal&fq=dh_inicio:%5B${time.start}%20TO%20${time.end}%5D`;
            try{
                const response = await axios.get(url+query);
                return res.json(response.data)
            }
            catch(err){
                return false
            }
        }
        return false;
    }
}