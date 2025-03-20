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
          if (env.BRANCH_NAME != 'main' && env.CHANGE_ID == null) {
            echo 'Skipping build on non-main branch'
            return
          }

          stage('Checkout') {
            checkout scm
          }

          stage('Build') {
            sh 'corepack enable'
            sh 'cd angular/ && pnpm install'
            sh 'cd angular/ && pnpm run build'
          }

          stage('Lint') {
            sh 'cd angular/ && npm run lint'
          }

          stage('Format') {
            sh 'cd angular/ && npm run format:check'
          }

          if (env.BRANCH_NAME == 'main') {
            stage("Deploy ${NGUI} NPM package") {
              withCredentials([file(credentialsId: 'KAIROSH_NPMRC', variable: 'NPMRC')]) {
                sh 'echo $NPMRC > .npmrc'
                sh "cd angular/dist/${NGUI} && npm publish --access public"
              }
            }
          }
        }
    }
}
