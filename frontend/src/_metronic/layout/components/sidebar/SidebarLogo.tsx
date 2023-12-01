import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'

const SidebarLogo = () => {
  const {config} = useLayout()
  const appSidebarDefaultMinimizeDesktopEnabled = config?.app?.sidebar?.default?.minimize?.desktop?.enabled
  const appSidebarDefaultCollapseDesktopEnabled = config?.app?.sidebar?.default?.collapse?.desktop?.enabled
  const toggleType = appSidebarDefaultCollapseDesktopEnabled ? 'collapse' : appSidebarDefaultMinimizeDesktopEnabled ? 'minimize' : ''
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? 'active' : ''
  const appSidebarDefaultMinimizeDefault = config.app?.sidebar?.default?.minimize?.desktop?.default
  return (
    <div className='app-sidebar-logo d-flex align-items-center justify-content-center' id='kt_app_sidebar_logo'>
      <Link to='/dashboard'>
        {config.layoutType === 'dark-sidebar' ? (
          <div className='sidebar-brand'>
            <h1 className='logo-name text-uppercase fw-bold' style={{color: 'white'}}>
              Like Me
            </h1>
          </div>
        ) : (
          <>
            <div className='sidebar-brand'>
              <h1 className='logo-name text-uppercase  fw-bold' style={{color: 'black'}}>
                Like Me
              </h1>
            </div>
          </>
        )}
      </Link>

      {(appSidebarDefaultMinimizeDesktopEnabled || appSidebarDefaultCollapseDesktopEnabled) && (
        <div id='kt_app_sidebar_toggle' className={clsx('app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate', {active: appSidebarDefaultMinimizeDefault})} data-kt-toggle='true' data-kt-toggle-state={toggleState} data-kt-toggle-target='body' data-kt-toggle-name={`app-sidebar-${toggleType}`}>
          <KTSVG path='/media/icons/duotune/arrows/arr079.svg' className='svg-icon-2 rotate-180' />
        </div>
      )}
    </div>
  )
}

export {SidebarLogo}