//import path for join paths of your current directory.
const path = require('path');
//import a html-webpack-plugin to use your index.html to be a template for your html file in your dist folder.
const htmlPlugin = require('html-webpack-plugin');

//Define a babelConfiguration variable that will hold specifically hold our rules for our javascript files.
const babelConfiguration = {
    //Your test property will indicate what type of files will be loaded based on this regular expression
    test: /\.(jsx|js)$/,
    //All your rules will contain a test and use property.
    //The use property can be a object which would have our loader and options, or array indicating the use of multiple loaders.
    use: {
        loader: 'babel-loader',
        options: {
            //Can reuse compiled files. 
            cacheDirectory: true
        }
    },
    //Have a exclude property which will exclude node_modules from being compiled by the loader..
    exclude: /node_modules/
};

//Now export the object which will hold our configuration.
module.exports = {
    //USE the entry property to load your files where your app is initialized.
    entry: path.join(__dirname, '/src/index.js'),
    //Use the output property which will hold our bundled file which the path it will be in.
    //And name of file.
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    //Define options for webpack-dev-server to change it's behavior
    devServer: {
        //Public server path
        publicPath: '/',
        //Set the history api fallback url boolean value set to true.
        historyApiFallback: true,
        //Base folder for production 
        contentBase: '/dist'
    },
    //Define a module property that will hold our rules for our bundler.
    module: {
        //Define rules which will indicate what loaders are used based on the test property.
        //This will hold our babelConfiguration variable.
        rules: [
            babelConfiguration,
            {
                test: /\.css$/,
                //have your use property be an array since we will load css file with multiple loaders.
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        //Have your options of your loader map over the source which would be your node_modules. 
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    //Define a plugins property that will contains any extra plugins.
    plugins: [
        //It will hold our htmlPlugin which will have a template property which will be the path of your html file
        // to become a template for your distribution/production folder.
        new htmlPlugin({
            template: path.join(__dirname, '/src/index.html')
        })
    ]
}