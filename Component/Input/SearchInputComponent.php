<?php

namespace XVEngine\Bundle\SearchInputBundle\Component\Input;

use XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent\AbstractParameter;
use XVEngine\Core\Component\Input\AbstractInputComponent;


/**
 * Class SearchInputComponent
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\SearchInputBundle\Component\Input
 */
class SearchInputComponent extends AbstractInputComponent
{

    /**
     * @var AbstractParameter[]
     */
    protected $parameters = [];

    /**
     * @author Krzysztof Bednarczyk
     */
    public function initialize()
    {
        $this->setComponentName('input.searchInputComponent');

        $this->setParamByRef("parameters", $this->parameters);

        $this->setParam("libs", [
            "//cdn.rawgit.com/bordeux/search.js/master/vendor/underscore-1.4.3.js",
            "//cdn.rawgit.com/bordeux/search.js/master/vendor/backbone.js",
            "//cdn.rawgit.com/bordeux/search.js/02e31b9ba061b3d9cfe9eefe742c0b2375bee56a/lib/js/search.js",
        ]);

        $this->setParam("libsCss", [
            "//cdn.rawgit.com/bordeux/search.js/master/lib/css/reset.css",
            "//cdn.rawgit.com/bordeux/search.js/master/lib/css/icons.css",
            "//cdn.rawgit.com/bordeux/search.js/master/lib/css/workspace.css",
        ]);

        parent::initialize();
    }




    /**
     * @author Krzysztof Bednarczyk
     * @param string $placeholder
     * @return $this
     */
    public function setPlaceholder($placeholder)
    {
        return $this->setParam("placeholder", $placeholder);
    }


    /**
     * @author Krzysztof Bednarczyk
     * @return $this
     */
    public function addParameter(AbstractParameter $parameter){
        $this->parameters[] = $parameter;
        return $this;
    }


    /**
     * @author Krzysztof Bednarczyk
     * @param AbstractParameter[] $parameters
     * @return $this
     */
    public function setParameters(array $parameters){
        $this->parameters = $parameters;

        return $this;
    }

    /**
     * @author Krzysztof Bednarczyk
     * @param bool|true $value
     * @return $this
     */
    public function setStrict($value = true){
        return $this->setParam("strict", $value);
    }

}
