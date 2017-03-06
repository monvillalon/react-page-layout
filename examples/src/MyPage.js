import React, { PureComponent } from 'react';
import { Page, Section } from '../../src';
import Radios from './Radios';

class MyPage extends PureComponent {

  state = {
    layout: 'full',
    title: 'React Page Layout - Example',
    sidebar: true,
    overrideFooter: false,
    contentSectionName: 'content',
  };

  handleLayoutChange = (e) => {
    const layout = e.target.value;
    this.setState({ layout });
  };

  handleSidebarToggle = (e) => {
    const sidebar = e.target.value === '1';
    this.setState({ sidebar });
  };

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
  };

  handleToggleWrapper = (e) => {
    const contentSectionName = e.target.value;
    this.setState({ contentSectionName });
  }

  handleFooterToggle = (e) => {
    const overrideFooter = e.target.value === '1';
    this.setState({ overrideFooter });
  };

  renderSidebar() {
    return (
      <Section slot="sidebar">
        <menu>
          <ul>
            <li>
              <a href='#'>
                Page 1
              </a>
              <a href='#'>
                Page 2
              </a>
            </li>
          </ul>
        </menu>
      </Section>
    );
  }

  renderFooter() {
    return (
      <Section slot="footer">
        This footer is defined on the <strong>&lt;Page&gt;</strong>
      </Section>
    );
  }

  render() {
    const { layout, title, sidebar, contentSectionName, overrideFooter } = this.state;

    return (
      <Page layout={layout} title={title}>

        {sidebar && this.renderSidebar()}

        <Section slot={contentSectionName}>

          <h2>Change Layout:</h2>
          <p className="hint">
            The current layout is specified as prop to the <strong>&lt;Page&gt;</strong> component
            and can be changed dynamically
          </p>
          <Radios
            name="layout"
            value={layout}
            options={[
              { label: 'Use Full layout', value: 'full' },
              { label: 'Use Panel layout', value: 'panel' }
            ]}
            onChange={this.handleLayoutChange}
          />

          <h2>Optional Slots:</h2>
          <p className="hint">
            If a <strong>&lt;Section&gt;</strong> is not used,
            its corresponding <strong>&lt;Slot&gt;</strong> will
            not be rendered. You can use this to have optional
            parts of your layout
          </p>
          <Radios
            name="sidebar"
            value={sidebar ? '1': '0'}
            disabled={layout === 'panel'}
            options={[
              { label: 'Show the sidebar', value: '1' },
              { label: 'Hide the sidebar', value: '0' }
            ]}
            onChange={this.handleSidebarToggle}
           />
          <hr />

          <h2>Configuring the Layout:</h2>
          <p className="hint">
            Props passed to the <strong>&lt;Page&gt;</strong>, are in turn passed to the <strong>Layout</strong> component
            that way you can customize the layout on a page to page basis
          </p>
          <div className="form-group">
             <label htmlFor="title">
               Change the title of the page
             </label>
             <input
               id="title"
               type="text"
               className="form-control"
               placeholder="Enter a title for the page"
               value={title}
               onChange={this.handleTitleChange}
            />
          </div>
          <hr />

          <h2>Nested Sections</h2>
          <p className="hint">
            A <strong>&lt;Slot&gt;</strong> in the <strong>Layout</strong> can be nested
            This allows you to override the content at different depths.
            for example, one page may need a full width, and another will
            have the default padding and margin.
          </p>
          <Radios
            name="contentSectionName"
            value={contentSectionName}
            options={[
              { label: 'Use the "content" slot', value: 'content' },
              { label: 'Use the "content-wrapper" slot', value: 'content-wrapper' }
            ]}
            onChange={this.handleToggleWrapper}
          />
          <hr />

          <h2>Default Sections</h2>
          <p className="hint">
            If you don't specify a specific <strong>&lt;Section&gt;</strong>
            that the layout defines the children of the <strong>&lt;Slot&gt;</strong> will be used.
            You can use this to have default content, that pages can override
          </p>
          <Radios
            name="overrideFooter"
            value={overrideFooter ? '1': '0'}
            options={[
              { label: 'Use footer defined in the layout', value: '0' },
              { label: 'Use Footer defined on the page', value: '1' }
            ]}
            onChange={this.handleFooterToggle}
          />

        </Section>

        {overrideFooter && this.renderFooter()}

      </Page>
    );
  }
}

export default MyPage;
