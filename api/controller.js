const { restart } = require("nodemon");

function handleErr(res, err)
{
    console.log('Got an error in the controller: ', err)
    return res.status(400).send({err});
}

module.exports = function(Model)
{
    return{
        create: (req, res, next) => 
        {
            console.log('Create body: ', req.body);
            Model.create(req.body, function(err, result) {
                if (err) {
                    handleErr(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} created successfully`,
                    result,
                });
            })
        },
        update: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.update(query, req.body, (err, result) => {
                if (err) {
                    handleErr(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} updated succesfully`,
                    result,
                });
            })
        },
        delete: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.delete(query, (err, result) => {
                if (err) {
                    handleErr(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} deleted successfully`,
                    result,
                });
            })
        },
        get: (req, res, next) => {
            const query = {};
            Model.get(query, (err, result) => {
                if (err) {
                    handleErr(res, err);
                    return;
                }
                res.json(result);
            })
        },
        getByEmail: (req, res, next) => {
            const query = {
                email: req.params.email
            };
            Model.get(query, (err, result) => {
                if (err) {
                    handleErr(res, err)
                    return;
                }
                res.json(result);
            })
        }
    }
}