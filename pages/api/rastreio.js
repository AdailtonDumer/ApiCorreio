import TrackingCorreios from 'tracking-correios'

async function Rastreio(req, res){
    const {TrackCode} = req.body
    let response ='Void'
    try{
    response = await Rastreia(TrackCode)
    }catch(e){
    response = e 
    }

    res.json({
        Response:response
    })
}
export default Rastreio

function Rastreia(TrackCode){
    return TrackingCorreios.track(TrackCode)
}