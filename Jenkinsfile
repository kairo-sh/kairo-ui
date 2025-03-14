NGUI = 'ng-ui'

podTemplate(containers: [
    containerTemplate(
        name: 'node',
        image: 'node:22-slim',
        command: 'sleep',
        args: '1h',
        resourceRequestCpu: '200m',
        resourceLimitCpu: '500m',
        resourceRequestMemory: '200Mi',
        resourceLimitMemory: '500Mi'
    ),
], volumes: [
    hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
]) {
    node(POD_LABEL) {
        container('node') {
          stage('Checkout') {
            checkout scm
          }

          stage('Build') {
            sh 'cd angular/'

            sh 'npm install'
            sh 'npm run build'

            sh 'cd ..'
          }

          if (env.GIT_TAG_NAME) {
            stage('Deploy ${NGUI} NPM package') {
              withCredentials([file(credentialsId: 'KAIROSH_NPMRC', variable: 'NPMRC')]) {
                sh 'echo $NPMRC > .npmrc'
                sh 'cd angular/dist/${NGUI} && npm publish --access public'
              }
            }
          }
        }
    }
}
