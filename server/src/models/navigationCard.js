import mongoose from 'mongoose';

const NavigationCardSchema = new mongoose.Schema({
    // titulo de la tarjeta de navegacion
    title:{
        type: String,
        required: true,
        // trim elimina espacios en blanco al inicio y al final
        trim: true,
    },

    // Imagen de la tarjeta de navegacion
    imagenUrl:{
        type: String,
        required: true,
        trim: true,
    },

    // pagina a la que navega la tarjeta
    page:{
        type: String,
        required: true,
        enum: [
            'home',
            'quever',
            'centrohistorico',
            'tierradevinos',
            'rutadelagarnacha',
            'haciendas',
            'rutareligiosa',
            'feriasyfestividades'
        ]
    },
    // estado de visibilidad de la tarjeta
    visible: {
        type: Boolean,
        default: true,
    },
    // orden de la tarjeta en la navegacion
    order: {
        type: Number,
        default: 0,
    },
    esInformativa: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
);

// indice compuesto para page y order para optimizar consultas
// osea para que las consultas que busquen por page y ordenen por order sean mas rapidas
NavigationCardSchema.index({page: 1, order: 1});

export default mongoose.model('NavigationCard', NavigationCardSchema);