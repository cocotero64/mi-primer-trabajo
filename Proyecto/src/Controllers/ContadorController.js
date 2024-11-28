const pool = require('../Services/dbServices');

exports.getContador = async (req, res)=>{
    try{
        const connection = await pool.getConnection();
        const result = await connection.query('SELECT valor FROM contador WHERE id=1');
        connection.release();
        res.json({contador: result[0].valor});
    }catch(error){
        console.error('Error al optener el contador: ', error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}
exports.incrementarContador = async(req,res)=>{
    try{
        const connection = await pool.getConnection();
        await connection.query('UPDATE contador SET valor = valor + 1 WHERE id=1');
        connection.release();
        res.json({success: true});
    }catch(error){
        console.error('Errror al incrementar el contador: ' ,error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
}