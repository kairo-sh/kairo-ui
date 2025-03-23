@Library('kairo-ci@v1.0.0') _

import sh.kairo.NodeProject

k8sNode(['node']) {
  nodeContainer {
    def ngui = new NodeProject(this, 'pnpm', 'angular')

    stage('PNPM - Install') {
      ngui.install()
    }

    stage('PNPM - Build') {
      ngui.build()
    }

    stage('PNPM - Lint') {
      ngui.lint()
    }

    stage('PNPM - Format') {
      ngui.format()
    }

    stageRelease('NPM - Publish NGUI') {
      ngui.publishWithPublicAccess('angular/dist/ng-ui')
    }
  }
}
