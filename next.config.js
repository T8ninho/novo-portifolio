/** @type {import('next').NextConfig} */
const nextConfig = {
    function (api) {
        return {
            plugins: ['macros'],
        }
    },
    // Configuração do ícone
    async headers() {
        return [
        {
            source: '/favicon/(.*)',
            headers: [
            {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
            },
            ],
        },
        ];
    },
    //configuração reduzir o tamanho em disco de uma imagem
	module: {
        
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', // Define o diretório de saída das imagens otimizadas
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65, // Ajuste a qualidade conforme necessário
                            },
                        },
                    },
                ],
            },
        ],
    },
}

module.exports = nextConfig
