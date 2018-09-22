module.exports = (grunt) => {
  grunt.initConfig({
    lambda_invoke: {
      default: {}
    },
    lambda_package: {
      default: {},
      prod: {}
    },
    lambda_deploy: {
      default: {
        options: {
          region: 'eu-west-1'
        },
        arn: 'arn:aws:lambda:eu-west-1:365488455739:function:stage-oauth-request-token'
      },
      prod: {
        options: {
          region: 'eu-west-1'
        },
        arn: 'arn:aws:lambda:eu-west-1:365488455739:function:prod-oauth-request-token'
      }
    }
  })

  grunt.loadNpmTasks('grunt-aws-lambda')
  grunt.registerTask('default', ['lambda_package'])
  grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy:default'])
  grunt.registerTask('deploy_prod', ['lambda_package', 'lambda_deploy:prod'])
}
